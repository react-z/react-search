/** @jsx React.DOM */

var React = require('react');
var SecondsTohhmmss = require('./SecondsTohhmmss.jsx');

/**
 * Search module
 * A simple search box component.
**/

var Search = React.createClass({
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
    // need val to come through, maybe ref?
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
      <div className="react-search">
       <input type="text" className="input-text" onKeyUp={this.changeInput}  />

        <div id="result">
        </div>
      </div>
    );
  }
});

module.exports = Search;