import React from 'react'
import Search from '../lib/search'

let TestComponent = React.createClass({

  myFunc:function(e) {
    console.log(e.target.value);
  },

  render: function() {
    return (
      <Search items={this.props.items} placeHolder="Search for a programming language" onChange={this.myFunc} />
   	);
  }
});

let ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala','haskell']
React.render(<TestComponent items={ITEMS} />, document.getElementById('container'))