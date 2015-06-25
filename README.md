# react-search

react-search is a simple search box autocomplete component using react.js.

## Installation

`npm install react-search --save`

## Usage

```javascript

import React from 'react'
import Search from 'react-search'

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

```

## Callbacks onClick and onChange

You can specify callback functions for onClick of the element and onChange of the search input. The element passed in is the SyntheticKeyboardEvent, which you can use to get the target or value.

## Styles

react-search can be used with your own custom styles. A minimal search.css style sheet is included in the example as a guide.

## Development
    
    npm install
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)