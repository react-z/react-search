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

      <div className="react-search">
       <input className="input-text" type="text" placeholder="searchValue" />
       <button onClick={this.search} className="pure-button button-secondary">search</button>
      </div>
    );
  }
});

module.exports = Search;