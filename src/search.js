/**
 * Search module
 * A simple search component.
**/
import SearchItemInArray from './SearchItemInArray'
import React, { Component, PropTypes } from 'react'

class Search extends Component {

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
      placeHolder: PropTypes.string,
      onChange: PropTypes.func,
      onClick: PropTypes.func,
      hiddenClassName: PropTypes.string,
      openClassName: PropTypes.string,
      ItemElement: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
      ]),
      itemElemProps: PropTypes.object,
      inputProps: PropTypes.object,
      itemProps: PropTypes.object,
      autoCompleteListProps: PropTypes.object,
      autoCompleteProps: PropTypes.object,
      wrapperProps: PropTypes.object
    }
  }

  constructor (props) {
    super(props)
    if (this.props.hiddenClassName == null) {
      this.props.hiddenClassName = `${this.props.classPrefix}__menu--hidden`
    }
    if (this.props.openClassName == null) {
      this.props.openClassName = `${this.props.classPrefix}__menu--open`
    }
    this.state = {
      matchingItems: []
    }
  }

  changeInput (e) {
    if (typeof this.props.onChange !== 'undefined') {
      this.props.onChange(e)
    }

    let autocomplete = this.refs.autocomplete
    autocomplete.className = toggleAutoCompleteClass(autocomplete.className, false, this.props)
    let searchValue = this.refs.searchInput.value
    let result = SearchItemInArray(this.props.items, searchValue)
    this.setState({matchingItems: result})
  }

  selectAutoComplete (e) {
    if (typeof this.props.onClick !== 'undefined') {
      this.props.onClick(e)
    }

    let autocomplete = this.refs.autocomplete
    autocomplete.className = toggleAutoCompleteClass(autocomplete.className, true, this.props)
    let result = e.target.innerHTML
    this.refs.searchInput.value = result
  }

  render () {
    const {
      ItemElement,
      inputProps = {},
      itemElemProps = {},
      itemProps = {},
      autoCompleteListProps = {},
      autoCompleteProps = {},
      wrapperProps = {}
    } = this.props
    const inputClassName = `${this.props.classPrefix}__input`
    const menuClassName = `${this.props.classPrefix}__menu ${this.props.hiddenClassName}`

    let items = this.state.matchingItems.map((item, i) => (
      <li key={i} className={`${this.props.classPrefix}__menu-item`} {...itemProps}>
        <ItemElement {...itemElemProps} onClick={this.selectAutoComplete.bind(this)}>{item}</ItemElement>
      </li>
    ))

    return (
      <div className={this.props.classPrefix} {...wrapperProps}>

       <input
            type='text'
            className={inputClassName}
            placeholder={this.props.placeHolder}
            ref='searchInput'
            onKeyUp={this.changeInput.bind(this)}
            {...inputProps}
        />

        <div className={menuClassName} ref='autocomplete' {...autoCompleteProps}>
          <ul className={`${this.props.classPrefix}__menu-items`} {...autoCompleteListProps}>
            {items}
          </ul>
        </div>

      </div>
    )
  }
}

function toggleAutoCompleteClass (className, isOpen, props) {
  if (isOpen) {
    return className.replace(props.openClassName, props.hiddenClassName)
  }
  return className.replace(props.hiddenClassName, props.openClassName)
}

module.exports = Search
