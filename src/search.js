/**
 * Search component
 * A simple search component.
**/
import SearchItemInArray from './SearchItemInArray'
import SearchItemInArrayObjects from './SearchItemInArrayObjects'
import React, { Component, PropTypes } from 'react'

export default class Search extends Component {

  static get defaultProps () {
    return {
      ItemElement: 'a',
      classPrefix: 'react-search'
    }
  }

  static get propTypes () {
    return {
      classPrefix: PropTypes.string,
      items: PropTypes.array.isRequired,
      searchKey: PropTypes.string,
      keys: PropTypes.array,
      placeholder: PropTypes.string,
      onChange: PropTypes.func,
      onClick: PropTypes.func,
      ItemElement: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
      ])
    }
  }

  constructor (props) {
    super(props)
    this.state = { matchingItems: [] }
  }

  changeInput (e) {
    this.refs.autocomplete.className = `${this.props.classPrefix}__menu ${this.props.classPrefix}__menu--open`
    let searchValue = this.refs.searchInput.value

    let result

    if ((this.props.keys !== undefined && this.props.searchKey !== undefined)) {
      /* hash */
      result = SearchItemInArrayObjects(this.props.items, searchValue, this.props.searchKey)
    } else {
      /* array */
      result = SearchItemInArray(this.props.items, searchValue)
    }

    this.setState({matchingItems: result})

    if (this.props.onChange !== undefined) {
      this.props.onChange(e, result)
    }
  }

  selectAutoComplete (e) {
    this.refs.autocomplete.className = `${this.props.classPrefix}__menu ${this.props.classPrefix}__menu--hidden`
    let result
    if (e.currentTarget.children.length) {
      result = e.currentTarget.children[0].innerHTML
    } else {
      result = e.currentTarget.innerHTML
    }
    this.refs.searchInput.value = result

    if (this.props.onClick !== undefined) {
      this.props.onClick(e, result)
    }
  }

  render () {
    const { ItemElement } = this.props
    const inputClassName = `${this.props.classPrefix}__input`
    const menuClassName = `${this.props.classPrefix}__menu ${this.props.classPrefix}__menu--hidden`

    let items = []

    if ((this.props.keys !== undefined)) {
      /* items for hash results */
      items = this.state.matchingItems.map((item, i) => {
        return (
          <li key={i}
              className={`${this.props.classPrefix}__menu-item`}
              onClick={this.selectAutoComplete.bind(this)}>
            {
              this.props.keys.map((itemKey, j) => {
                return (
                  <ItemElement key={j}>
                  { item[itemKey] }
                  </ItemElement>
                )
              })
            }
          </li>
        )
      })
    } else {
      /* items for a simple array */
      items = this.state.matchingItems.map((item, i) => (
        <li key={i} className={`${this.props.classPrefix}__menu-item`}>
          <ItemElement onClick={this.selectAutoComplete.bind(this)}>{item}</ItemElement>
        </li>
      ))
    }

    return (
      <div className={this.props.classPrefix}>

       <input
            type='text'
            className={inputClassName}
            placeholder={this.props.placeholder}
            ref='searchInput'
            onKeyUp={this.changeInput.bind(this)} />

        <div className={menuClassName} ref='autocomplete'>
          <ul className={`${this.props.classPrefix}__menu-items`}>
            {items}
          </ul>
        </div>

      </div>
    )
  }
}
