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

    let autocomplete = this.refs.autocomplete.getDOMNode();
    autocomplete.className = "menu menu-open";
    let searchValue = this.refs.searchInput.getDOMNode().value;
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

    let autocomplete = this.refs.autocomplete.getDOMNode();
    autocomplete.className = "menu menu-hidden";
    let result = e.target.innerHTML;
    this.refs.searchInput.getDOMNode().value = result;
  },
  render: function(){

    let items = this.state.matchingItems.map( (item, i) => {
      return (
        <li key={i}>
          <a onClick={this.selectAutoComplete}>{item}</a>
        </li>
      );
    }.bind(this));

    return (
      <div className="react-search">

       <input type="text" 
              className="input-text" 
              placeholder={this.props.placeHolder}
              ref="searchInput" 
              onKeyUp={this.changeInput} />

        <div className="menu menu-hidden" ref="autocomplete">
          <ul>{items}</ul>
        </div>

      </div>
    );
  }
});

module.exports = Search;