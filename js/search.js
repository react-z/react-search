/** @jsx React.DOM */

var React = require('react');
var SearchItemInArray = require('../js/SearchItemInArray.js');

/**
 * Search module
 * A simple search box component.
**/

var Search = React.createClass({displayName: "Search",
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
        React.createElement("li", null, 
          React.createElement("a", {onClick: this.selectAutoComplete}, 
            item
          )
        )
      );
    }.bind(this));

    return (
      React.createElement("div", {className: "react-search"}, 
       React.createElement("input", {type: "text", className: "input-text", ref: "searchInput", onKeyUp: this.changeInput}), 

        React.createElement("div", {className: "menu menu-hidden", ref: "autocomplete"}, 
          React.createElement("ul", null, 
          items
          )
        )

      )
    );
  }
});

module.exports = Search;