/**
 * Search module
 * A simple search component.
**/
import SearchItemInArray from './SearchItemInArray'
import React, { Component, PropTypes } from 'react'

class Search extends Component {

  static defaultProps () {
    return {
      className: 'react-search'
    }
  }

  static propTypes () {
    return {
      className: PropTypes.string,
      items: PropTypes.array,
      placeHolder: PropTypes.string,
      onChange: PropTypes.func,
      onClick: PropTypes.func,
      inputProps: PropTypes.object,
      itemProps: PropTypes.object,
      autoCompleteListProps: PropTypes.object,
      autoCompleteProps: PropTypes.object,
      wrapperProps: PropTypes.object
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      matchingItems: []
    }
  }

  changeInput (e) {
    if (typeof this.props.onChange !== 'undefined') {
      this.props.onChange(e)
    }

    let autocomplete = this.refs.autocomplete
    autocomplete.className = `${this.props.className}__menu ${this.props.className}__menu--open`
    let searchValue = this.refs.searchInput.value
    let result = SearchItemInArray(this.props.items, searchValue)
    this.setState({matchingItems: result})
  }

  selectAutoComplete (e) {
    if (typeof this.props.onClick !== 'undefined') {
      this.props.onClick(e)
    }

    let autocomplete = this.refs.autocomplete
    autocomplete.className = `${this.props.className}__menu ${this.props.className}__menu--hidden`
    let result = e.target.innerHTML
    this.refs.searchInput.value = result
  }

  render () {
    const {
      inputProps = {},
      itemProps = {},
      autoCompleteListProps = {},
      autoCompleteProps = {},
      wrapperProps = {}
    } = this.props
    const inputClassName = `${this.props.className}__input`
    const menuClassName = `${this.props.className}__menu ${this.props.className}__menu--hidden`

    let items = this.state.matchingItems.map((item, i) => (
      <li key={i} className={`${this.props.className}__menu-item`} {...itemProps}>
        <a onClick={this.selectAutoComplete.bind(this)}>{item}</a>
      </li>
    ))

    return (
      <div className={this.props.className} {...wrapperProps}>

       <input
            type='text'
            className={inputClassName}
            placeholder={this.props.placeHolder}
            ref='searchInput'
            onKeyUp={this.changeInput.bind(this)}
            {...inputProps}
        />

        <div className={menuClassName} ref='autocomplete' {...autoCompleteProps}>
          <ul className={`${this.props.className}__menu-items`} {...autoCompleteListProps}>
            {items}
          </ul>
        </div>

      </div>
    )
  }
}

module.exports = Search
