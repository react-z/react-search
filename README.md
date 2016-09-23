# react-search

[![npm version](https://badge.fury.io/js/react-search.svg)](https://badge.fury.io/js/react-search)

![](https://raw.githubusercontent.com/StevenIseki/react-search/master/example/screenshot.gif)

react-search is a simple Autocomplete Search component

## Install

`npm install react-search --save`

## Usage

```jsx
import Search from 'react-search'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  HiItems(items) {
    console.log(items)
  }

  render () {
    let items = [
      { id: 0, value: 'ruby' },
      { id: 1, value: 'javascript' },
      { id: 2, value: 'lua' },
      { id: 3, value: 'go' },
      { id: 4, value: 'julia' }
    ]

    return (
      <div>
        <Search items={items} />

        <Search items={items}
                placeholder='Pick your language'
                max_selected={3}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root'))
```

## Props

#### `items` (required)
List of Items to filter through, an array of items with `value` and `id`, and any other props. value is displayed. ` let items = [{ id: 0, value: 'ruby' }, { id: 1, value: 'lua' }`

#### `multiple` (optional)
Defaults to false, set as true if you want multiple items in the list, false for a single selection dropdown.

#### `max_selected` (optional)
Defaults to 100, a maximum number of items allowed to be selected

#### `placeholder` (optional)
placeholder for the input

#### `onItemsChanged` (optional)
Handler returns the items from the Search autocomplete component when items are added or removed from the list.

## Styles

react-search can be used with your own custom styles. A minimal [react-search.css](https://github.com/StevenIseki/react-search/blob/master/lib/react-search.css) style sheet is included.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
