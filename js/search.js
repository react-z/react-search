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
       searchValue: '',
       items:  ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan']
     }
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },  
  changeInput: function (val) {
    if(val == undefined){
      return;
    }
    var result = this.autoComplete(val);
    document.getElementById("result").innerHTML = result;
  },
  autoComplete: function (input) {
    //
    var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
    
    return this.state.items.filter(function(item) {
      if (item.match(reg)) {
        return item;
      }
    });
  },
  render: function(){
    return (
      React.createElement("div", {className: "react-search"}, 
       React.createElement("input", {type: "text", className: "input-text", onKeyUp: this.changeInput}), 

        React.createElement("div", {id: "result"}
        )
      )
    );
  }
});

module.exports = Search;