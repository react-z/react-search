var React = require('react');
var Search = require('../jsx/search.jsx');
var ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala','haskell']

React.render(
	React.createElement(
		Search, 
		{items: ITEMS}
	),
	document.getElementById("container")
);
