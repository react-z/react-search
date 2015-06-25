var React = require('react');
var Search = require('../jsx/search.jsx');

var SearchBar = React.createClass({displayName: "SearchBar",

    myFunc:function(e) {
      console.log(e.target.value);
    },

    render:function() {

        var ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala','haskell']

        return (
          React.createElement("form", null, 
          React.createElement(Search, {items: ITEMS, onChange: this.myFunc, onClick: this.myFunc })
          )
        );
    }

});


React.render(
	React.createElement(
		SearchBar
	),
	document.getElementById("container")
);

