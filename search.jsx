// search.jsx

'use strict';

var SearchBox = React.createClass({
  render: function() {
    return (
    	<div>
	    	<input className="search-input" autocomplete="off" class="search" placeholder="Search previous posts" onfocus="this.placeholder = 'Search for posts'" onblur="this.placeholder = 'enter your text'" />	
			  <a className="search-icon" href="#"></a>
		</div>
    );
  }
});
