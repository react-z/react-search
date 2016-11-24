/**
 * Autocomplete Search component
**/
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class Search extends Component {

  static get defaultProps () {
    return {
      initialSelected: [],
      placeholder: '— None',
      NotFoundPlaceholder: 'Please search for some items...',
      maxSelected: 100,
      multiple: false
    }
  }

  static get propTypes () {
    return {
      items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      initialSelected: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.arrayOf(React.PropTypes.object)
      ]),
      onItemsChanged: React.PropTypes.func,
      placeholder: React.PropTypes.string,
      NotFoundPlaceholder: React.PropTypes.string,
      maxSelected: React.PropTypes.number,
      multiple: React.PropTypes.bool,
      onKeyChange: React.PropTypes.func,
      getItemsAsync: React.PropTypes.func
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      menuItems: [],
      selectedItems: [],
      searchValue: '',
      menuVisible: false
    }
  }

  componentDidMount() {
    const { initialSelected } = this.props;
    if(initialSelected instanceof Array) {
      this.setSelected(initialSelected)
    } else {
      this.addSelected(initialSelected)
    }
  }

  SearchItemInArrayObjects(items, input, searchKey) {
    var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ''), 'i')
    return items.filter((item) => {
      if (reg.test(item[searchKey])) {
        return item
      }
    })
  }

  selectMenuItem (item) {
    const { multiple } = this.props;
    multiple ? this.addSelected(item) : this.setSelected( [item] )
    this.hideMenu()
  }

  showMenu() {
    this.setState({menuVisible: true })
  }

  hideMenu() {
    this.setState({menuVisible: false })
    this.resetPlaceholder()
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
    this.setState({selectedItems: selected }, () => {
      this.triggerItemsChanged()
    })
  }

  addSelected(selected) {
    let items = this.state.selectedItems
    items.push(selected)
    this.setState({selectedItems: items }, () => {
      this.triggerItemsChanged()
    })
  }

  removeSelected(itemId) {
    let items = this.state.selectedItems
    let itemsUpdated = items.filter( (i) => {
	     return i.id != itemId
    })
    this.setState({selectedItems: itemsUpdated }, () => {
      this.triggerItemsChanged()
    })
  }

  updateSearchValue(value) {
    const { items } = this.props;
    this.setState({ searchValue: value }, () => {
      let menuItems = this.SearchItemInArrayObjects(items, this.state.searchValue, 'value')
      this.setMenuItems(menuItems)
    })
  }

  showAllMenuItems() {
    const { items } = this.props;
    this.setState({searchValue: ''})
    let menuItems = this.SearchItemInArrayObjects(items, '', 'value')
    this.setMenuItems(menuItems)
  }

  setMenuItems(items) {
    const { getItemsAsync } = this.props;
    this.setState({menuItems: items})
    if(items.length || getItemsAsync != undefined){
      this.showMenu()
    } else {
      this.hideMenu()
    }
  }

  itemSelected(itemId) {
    const { selectedItems } = this.state;
    let item = selectedItems.find( (s) => {
        return s.id === itemId;
    });
    return (item != undefined) ? true : false
  }

  focusInput() {
    this.showAllMenuItems()
    ReactDOM.findDOMNode(this.refs.searchInput).placeholder = ''
    ReactDOM.findDOMNode(this.refs.searchInput).value = ''
    this.blurTimeout = setTimeout(() => {
      ReactDOM.findDOMNode(this.refs.searchInput).focus()
    }, 100);
  }

  blurInput() {
    this.blurTimeout = setTimeout(() => {
      ReactDOM.findDOMNode(this.refs.searchInput).blur()
      this.hideMenu()
    }, 100);
  }

  resetPlaceholder() {
    let placeholder = ReactDOM.findDOMNode(this.refs.placeholder)
    placeholder = this.props.placeholder
  }

  handleRemove(e) {
    e.preventDefault()
    e.stopPropagation()
    this.removeSelected(e.target.dataset.id)
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
    let item = { id: parseInt(element.dataset.id), value: element.innerHTML.replace(/&amp;/g, '&') }
    this.selectMenuItem(item)
  }

  handleKeyChange (e) {
    const { getItemsAsync } = this.props;
    let value = this.refs.searchInput.value
    this.triggerKeyChange(value)
    if( getItemsAsync != undefined ) {
      this.triggerGetItemsAsync(value)
    } else {
      this.updateSearchValue(value)
    }
  }

  renderMenuItems() {
    const { menuItems, selectedItems } = this.state;
    const { NotFoundPlaceholder } = this.props;
    if(!menuItems.length) {
      return (
        <li className='autocomplete__item autocomplete__item--disabled'>
          <span data-id={0}>{NotFoundPlaceholder}</span>
        </li>
      )
    }

    let items = menuItems.map((item, i) => {
      if(this.itemSelected(item.id)){
        return (
          <li key={i} className='autocomplete__item autocomplete__item--disabled'>
            <span key={i} data-id={item.id} dangerouslySetInnerHTML={{__html: item.value }}></span>
          </li>
        )
      } else {
        return (
          <li key={i} className='autocomplete__item' onClick={this.handleSelect.bind(this)}>
            <span key={i} data-id={item.id} dangerouslySetInnerHTML={{__html: item.value }}></span>
          </li>
        )
      }
    })
    return items
  }

  renderSelectedItems() {
    const { selectedItems } = this.state;
    const { multiple, placeholder } = this.props;
    if(!selectedItems.length && multiple ) return;

    if(!selectedItems.length && !multiple ) {
      return (
        <li className='autocomplete__item autocomplete__item--selected autocomplete__item__dropdown'
            onClick={this.handleItemClick.bind(this)}>
          <span dangerouslySetInnerHTML={{__html: placeholder }}></span>
          <span className='autocomplete__dropdown' />
        </li>
      )
    }

    let items = selectedItems.map((item, i) => {
      let itemClass = 'autocomplete__item autocomplete__item--selected autocomplete__item__dropdown'
      let dropDown = <span className='autocomplete__dropdown' />
      let icon = <span data-id={item.id} className='autocomplete__close'
                     onClick={this.handleRemove.bind(this)}></span>

      if(multiple) {
        dropDown = null
        itemClass = 'autocomplete__item autocomplete__item--selected'
      }

      return (
        <li key={i} className={itemClass} onClick={this.handleItemClick.bind(this)}>
          <span data-id={item.id} dangerouslySetInnerHTML={{__html: item.value }}></span>
          { icon }
          { dropDown }
        </li>
      )
    })
    return items
  }

  renderInput() {
    const { maxSelected, multiple } = this.props;
    const { selectedItems } = this.state;
    let inputClass = 'autocomplete__input'
    if(multiple && selectedItems.length >= maxSelected ){
      inputClass = 'autocomplete__input autocomplete__input--hidden'
    }

    return (
      <input type='text'
             className={inputClass}
             ref='searchInput'
             placeholder={this.props.placeholder}
             onClick={this.handleClick.bind(this)}
             onFocus={this.handleFocus.bind(this)}
             onBlur={this.handleBlur.bind(this)}
             onKeyUp={this.handleKeyChange.bind(this)} />
    )
  }

  getMenuClass() {
    const { maxSelected, multiple } = this.props;
    const { menuVisible, selectedItems } = this.state;
    let menuClass = 'autocomplete__menu autocomplete__menu--hidden'
    if(menuVisible && !multiple){
      menuClass = 'autocomplete__menu'
    }
    if(menuVisible && selectedItems.length < maxSelected ){
      menuClass = 'autocomplete__menu'
    }
    return menuClass
  }

  render () {
    const { multiple } = this.props;
    let menuClass = this.getMenuClass()

    return (
      <div className='autocomplete'>

        <div className='autocomplete__selected'>
          <ul className='autocomplete__items'>
            {this.renderSelectedItems()}
          </ul>
        </div>

        { multiple && this.renderInput() }

        <div className='autocomplete__menu--wrap'>
          <div className={menuClass} ref='autocomplete'>
            { !multiple && this.renderInput() }
            <ul className='autocomplete__items'>
              {this.renderMenuItems()}
            </ul>
          </div>
        </div>

      </div>
    )
  }
}
