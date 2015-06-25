import React from 'react'
import Search from '../lib/search'

let TestComponent = React.createClass({

  myFunc:function(e) {
    console.log(e.target.value);
  },

  render: function() {
    return (
    	<div>
    		<Search items={this.props.items} onChange={this.myFunc} />
    	</div>
   	);
  }
});

let ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala','haskell']
React.render(<TestComponent items={ITEMS} />, document.getElementById('container'))