import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DropDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M7 10l5 5 5-5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

/**
 * Autocomplete Search component
 **/
export default class Search extends Component {
  static get defaultProps() {
    return {
      initialSelected: [],
      placeholder: '— None',
      NotFoundPlaceholder: 'Please search for some items...',
      maxSelected: 100,
      multiple: false
    }
  }

  static get propTypes() {
    return {
      items: PropTypes.arrayOf(PropTypes.object).isRequired,
      initialSelected: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object)
      ]),
      onItemsChanged: PropTypes.func,
      placeholder: PropTypes.string,
      NotFoundPlaceholder: PropTypes.string,
      maxSelected: PropTypes.number,
      multiple: PropTypes.bool,
      onKeyChange: PropTypes.func,
      getItemsAsync: PropTypes.func
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      menuItems: [],
      selectedItems: [],
      searchValue: '',
      menuVisible: false
    }
  }

  componentDidMount() {
    const { initialSelected } = this.props
    if (initialSelected instanceof Array) {
      this.setSelected(initialSelected)
    } else {
      this.addSelected(initialSelected)
    }
  }

  SearchItemInArrayObjects(items, input, searchKey) {
    var reg = new RegExp(
      input
        .split('')
        .join('\\w*')
        .replace(/\W/, ''),
      'i'
    )
    return items.filter(item => {
      if (reg.test(item[searchKey])) {
        return item
      }
    })
  }

  selectMenuItem(item) {
    const { multiple } = this.props
    multiple ? this.addSelected(item) : this.setSelected([item])
    this.hideMenu()
  }

  showMenu() {
    this.setState({ menuVisible: true })
  }

  hideMenu() {
    this.setState({ menuVisible: false })
  }

  triggerItemsChanged() {
    if (this.props.onItemsChanged !== undefined) {
      this.props.onItemsChanged(this.state.selectedItems)
    }
  }

  triggerKeyChange(searchValue) {
    if (this.props.onKeyChange !== undefined) {
      this.props.onKeyChange(searchValue)
    }
  }

  triggerGetItemsAsync(searchValue) {
    if (this.props.getItemsAsync !== undefined) {
      this.props.getItemsAsync(searchValue, () => {
        this.updateSearchValue(searchValue)
      })
    }
  }

  setSelected(selected) {
    this.setState({ selectedItems: selected }, () => {
      this.triggerItemsChanged()
    })
  }

  addSelected(selected) {
    let items = this.state.selectedItems
    items.push(selected)
    this.setState({ selectedItems: items }, () => {
      this.triggerItemsChanged()
    })
  }

  removeSelected(itemId) {
    let items = this.state.selectedItems
    let itemsUpdated = items.filter(i => {
      return i.id != itemId
    })
    this.setState({ selectedItems: itemsUpdated }, () => {
      this.triggerItemsChanged()
    })
  }

  updateSearchValue(value) {
    const { items } = this.props
    this.setState({ searchValue: value }, () => {
      let menuItems = this.SearchItemInArrayObjects(
        items,
        this.state.searchValue,
        'value'
      )
      this.setMenuItems(menuItems)
    })
  }

  showAllMenuItems() {
    const { items } = this.props
    this.setState({ searchValue: '' })
    let menuItems = this.SearchItemInArrayObjects(items, '', 'value')
    this.setMenuItems(menuItems)
  }

  setMenuItems(items) {
    const { getItemsAsync } = this.props
    this.setState({ menuItems: items })
    if (items.length || getItemsAsync != undefined) {
      this.showMenu()
    } else {
      this.hideMenu()
    }
  }

  itemSelected(itemId) {
    const { selectedItems } = this.state
    let item = selectedItems.find(s => {
      return s.id === itemId
    })
    return item != undefined ? true : false
  }

  focusInput() {
    this.showAllMenuItems()
    ReactDOM.findDOMNode(this.refs.searchInput).placeholder = ''
    ReactDOM.findDOMNode(this.refs.searchInput).value = ''
    this.blurTimeout = setTimeout(() => {
      ReactDOM.findDOMNode(this.refs.searchInput).focus()
    }, 100)
  }

  blurInput() {
    this.blurTimeout = setTimeout(() => {
      ReactDOM.findDOMNode(this.refs.searchInput).blur()
      this.hideMenu()
    }, 100)
  }

  handleRemove(e, id) {
    e.preventDefault()
    e.stopPropagation()
    this.removeSelected(id)
  }

  handleFocus(e) {
    this.focusInput()
  }

  handleBlur(e) {
    this.blurInput()
  }

  handleClick(e) {
    this.focusInput()
  }

  handleItemClick(e) {
    this.focusInput()
  }

  handleSelect(e) {
    let element = e.currentTarget.children[0]
    let item = {
      id: parseInt(element.dataset.id),
      value: element.innerHTML.replace(/&amp;/g, '&')
    }
    this.selectMenuItem(item)
  }

  handleKeyChange(e) {
    const { getItemsAsync } = this.props
    let value = this.refs.searchInput.value
    this.triggerKeyChange(value)
    if (getItemsAsync != undefined) {
      this.triggerGetItemsAsync(value)
    } else {
      this.updateSearchValue(value)
    }
  }

  renderMenuItems() {
    const { menuItems, selectedItems } = this.state
    const { NotFoundPlaceholder } = this.props
    if (!menuItems.length) {
      return (
        <ListItem style={{ color: '#ff6961' }}>
          <span data-id={0}>{NotFoundPlaceholder}</span>
        </ListItem>
      )
    }

    let items = menuItems.map((item, i) => {
      if (this.itemSelected(item.id)) {
        return (
          <ListItem key={i} style={{ color: '#ebebeb' }}>
            <span
              key={i}
              data-id={item.id}
              dangerouslySetInnerHTML={{ __html: item.value }}
            />
          </ListItem>
        )
      } else {
        return (
          <ListItem key={i} onClick={this.handleSelect.bind(this)}>
            <span
              key={i}
              data-id={item.id}
              dangerouslySetInnerHTML={{ __html: item.value }}
            />
          </ListItem>
        )
      }
    })
    return items
  }

  renderSelectedItems() {
    const { selectedItems } = this.state
    const { multiple, placeholder } = this.props
    if (!selectedItems.length && multiple) return

    if (!selectedItems.length && !multiple) {
      return (
        <ListItem onClick={this.handleItemClick.bind(this)}>
          <span dangerouslySetInnerHTML={{ __html: placeholder }} />
          <DropDownIcon />
        </ListItem>
      )
    }

    let items = selectedItems.map((item, i) => {
      return (
        <ListItem key={i} onClick={this.handleItemClick.bind(this)}>
          <span
            data-id={item.id}
            dangerouslySetInnerHTML={{ __html: item.value }}
          />
          <svg
            onClick={e => this.handleRemove(e, item.id)}
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" fillRule="evenodd">
              <path d="M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z" />
              <path d="M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z" />
            </g>
          </svg>
          {!multiple && <DropDownIcon />}
        </ListItem>
      )
    })
    return items
  }

  renderInput() {
    const { maxSelected, multiple } = this.props
    const { selectedItems } = this.state
    let visible = true
    if (multiple && selectedItems.length >= maxSelected) {
      visible = false
    }

    return (
      <Input
        type="text"
        visible={visible}
        ref="searchInput"
        placeholder={this.props.placeholder}
        onClick={this.handleClick.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        onKeyUp={this.handleKeyChange.bind(this)}
      />
    )
  }

  render() {
    const { maxSelected, multiple } = this.props
    const { menuVisible, selectedItems } = this.state

    let showMenu = false
    if (menuVisible && !multiple) {
      showMenu = true
    }
    if (menuVisible && selectedItems.length < maxSelected) {
      showMenu = true
    }

    return (
      <Autocomplete>
        <List>{this.renderSelectedItems()}</List>

        {multiple && this.renderInput()}
        <MenuWrapper>
          <Menu visible={showMenu} ref="autocomplete">
            {!multiple && this.renderInput()}
            <List>{this.renderMenuItems()}</List>
          </Menu>
        </MenuWrapper>
      </Autocomplete>
    )
  }
}

const Autocomplete = styled.div`
  margin: 0;
  position: relative;
`

const Input = styled.input`
  border: 0 !important;
  background: transparent !important;
  border-radius: 0;
  box-shadow: none;
  font-size: 1.3rem;
  line-height: normal;
  margin: 1px 0;
  outline: 0;
  padding: 0;
  position: relative;
  width: 100%;
  display: ${props => (props.visible ? 'block' : 'none')};
`

const List = styled.ul`
  margin: 0;
  padding: 0.2rem;
`
const ListItem = styled.li`
  color: #000;
  cursor: pointer;
  display: flex;
  list-style: none;
  margin: 0;
  margin-bottom: 0.2rem;
  padding: 0.3rem;

  background-color: ${props => (props.selected ? '#ebebeb' : '#fff')};

  &:hover {
    background-color: #ebebeb;
  }

  span {
    flex: 1;
    font-size: 1.3rem;
    word-wrap: break-word;
  }
`

const MenuWrapper = styled.div`
  position: relative;
  width: 100%;
`
const Menu = styled.div`
  background: white;
  box-shadow: 0.1rem 0.1rem 2rem rgba(0, 0, 0, 0.25);
  display: block;
  line-height: 1.5em;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0.2em;
  position: absolute;
  text-decoration: none;
  width: 100%;
  z-index: 100;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
