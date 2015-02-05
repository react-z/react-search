var React = require('react');
var Search = require('../jsx/search.jsx');
var OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

React.render(
	React.createElement(
		Search, 
		{options: OPTIONS}
	),
	document.getElementById("container")
);
