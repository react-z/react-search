import React from 'react'
import SearchItemInArray from './SearchItemInArray'

/**
 * Search module
 * A simple search box component.
**/

var Search = React.createClass({
  getInitialState: function(){
     return { matchingItems: [] }
  },

  getDefaultProps: function() {
    return { className: "react-search" };
  },

  propTypes: {
    items: React.PropTypes.array,
    placeHolder: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onClick: React.PropTypes.func
  },

  /** 
   * Input box text has changed, trigger update of the autocomplete box.
  **/
  changeInput: function (e) {
    
    /* On change input, trigger callback function. */
    if(typeof this.props.onChange !== 'undefined'){
      this.props.onChange(e);
    };

    let autocomplete = this.refs.autocomplete;
    autocomplete.className = `${this.props.className}__menu ${this.props.className}__menu--open`;
    let searchValue = this.refs.searchInput.value;
    let result = SearchItemInArray(this.props.items, searchValue);
    this.setState({matchingItems: result});
  },
  /** 
   * On selection of item, set the selected item.
  **/
  selectAutoComplete: function (e) {

    /* On selection of item, trigger callback function */
    if(typeof this.props.onClick !== 'undefined'){
      this.props.onClick(e);
    };

    let autocomplete = this.refs.autocomplete;
    autocomplete.className = `${this.props.className}__menu ${this.props.className}__menu--hidden`;
    let result = e.target.innerHTML;
    this.refs.searchInput.value = result;
  },
  render: function(){
    const inputClassName = `${this.props.className}__input`;
    const menuClassName = `${this.props.className}__menu ${this.props.className}__menu--hidden`;

    let items = this.state.matchingItems.map( (item, i) => {
      return (
        <li key={i} className={`${this.props.className}__menu-item`}>
          <a onClick={this.selectAutoComplete}>{item}</a>
        </li>
      );
    }.bind(this));

    return (
      <div className={this.props.className}>

       <input type="text"
              className={inputClassName}
              placeholder={this.props.placeHolder}
              ref="searchInput"
              onKeyUp={this.changeInput} />

        <div className={menuClassName} ref="autocomplete">
          <ul className={`${this.props.className}__menu-items`}>{items}</ul>
        </div>

      </div>
    );
  }
});

module.exports = Search;
