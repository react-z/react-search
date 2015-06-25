/*
import React from 'react/addons'
import PetList from './views/PetList'
import PetDetail from './views/PetDetail'
import Search from './src/search'


var TestComponent = React.createClass({

  myFunc:function(e) {
    console.log(e.target.value);
  },

  render: function() {
    return (
    	<div>
    		<Search items={this.props.items} onChange={this.filter} />
    	</div>
   	);
  }
});


var mountNode = document.getElementById('container')

var ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala','haskell']

React.render(<TestComponent items={ITEMS} />, mountNode);
*/

import Search from './src/search'