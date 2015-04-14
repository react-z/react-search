/** @jsx React.DOM */

var React = require('react');
var SearchItemInArray = require('../js/SearchItemInArray.js');

/**
 * Search module
 * A simple search box component.
**/

var Search = React.createClass({
  getInitialState: function(){
     return {
       items:  this.props.items,
       matchingItems: [],
       searchValue: ''
     }
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },  
  /** 
   * Input box text has changed, trigger update of the autocomplete box.
  **/
  changeInput: function () {
    var autocomplete = this.refs.autocomplete.getDOMNode();
    autocomplete.className = "menu menu-open";
    var searchValue = this.refs.searchInput.getDOMNode().value;
    var result = SearchItemInArray(this.state.items, searchValue);
    this.setState({matchingItems: result});
  },
  selectAutoComplete: function (e) {
    var autocomplete = this.refs.autocomplete.getDOMNode();
    autocomplete.className = "menu menu-hidden";
    var result = e.target.innerHTML;
    this.refs.searchInput.getDOMNode().value = result;
  },
  render: function(){

    var items = this.state.matchingItems.map(function (item) {
      return (
        <li>
          <a onClick={this.selectAutoComplete}>
            {item}
          </a>
        </li>
      );
    }.bind(this));

    return (
      <div className="react-search">
       <input type="text" className="input-text" ref="searchInput" onKeyUp={this.changeInput} />

        <div className="menu menu-hidden" ref="autocomplete">
          <ul>
          {items}
          </ul>
        </div>

      </div>
    );
  }
});

module.exports = Search;