/** @jsx React.DOM */

var React = require('react');
var SecondsTohhmmss = require('./SecondsTohhmmss.jsx');

/**
 * Search module
 * A simple search box component.
**/

var Search = React.createClass({displayName: "Search",
  getInitialState: function(){
     return {
       searchValue: ''
     }
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },  
  search: function () {

  },
  render: function(){
    return (

      React.createElement("div", {className: "react-search"}, 
       React.createElement("input", {className: "input-text", type: "text", placeholder: "searchValue"}), 
       React.createElement("button", {onClick: this.search, className: "pure-button button-secondary"}, "search")
      )
    );
  }
});

module.exports = Search;