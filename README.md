# react-search

[![npm version](https://badge.fury.io/js/react-search.svg)](https://badge.fury.io/js/react-search)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

react-search is a simple search autocomplete component using react

## Install

`npm install react-search --save`

## Usage

**items as an array**

```jsx
import Search from 'react-search'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

let ITEMS = ['ruby', 'javascript', 'lua', 'go', 'julia', 'c', 'scala','haskell']

ReactDOM.render(<Search items={ITEMS}/>, document.getElementById('root'));
```

**items as an array of objects**

```jsx
import Search from 'react-search'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

let ITEMS = [
	{ title: 'javascript', description: 'an awesome language' },
	{ title: 'ruby', description: 'a cool language' },
	{ title: 'haskell', description: 'a functional language' }
]

let KEYS = ['title', 'description']
let KEY = 'title' /* search by title */

ReactDOM.render(
  <Search 'Search for a programming language' items={ITEMS} keys={KEYS} searchKey={KEY} />,
	document.getElementById('root')
)
```

## Versions

#### `1.0.2` uses React `^0.13.0`

#### `1.0.9` uses React `^0.14.0`

#### `1.0.10` uses React `^15.1`

## Props

#### `items` (required)
List of Items to filter through, either an array of strings or objects.

#### `keys` (optional)
Keys to display, if using an array of objects.

#### `searchKey` (optional)
The search key to match when searhching, if using an array of objects.

#### `classPrefix` (optional)
default: `react-search`
Optional class prefix for included class names. Will be attached to the main wrapper element.

#### `placeholder` (optional)
placeholder attribute for the text input

#### `onChange` (optional)
Update handler for the text input. Fired before the internal logic to update the autocomplete list. Callback value passed back is the SyntheticKeyboardEvent, which you can use to get the target or value.

#### `onClick` (optional)
Click handler for each item in the autocomplete list. Fired before the internal logic to hide the autocomplete list. Callback value passed back is the SyntheticKeyboardEvent, which you can use to get the target or value.

#### `ItemElement` (optional)
default: `'a'`
Custom element to use for each `<li>` in the autocomplete list. Can be a React Element or a valid DOM tag as a string, such as `<CustomElement>` or `'div'`

## Styles

react-search can be used with your own custom styles. A minimal [search.css](https://github.com/StevenIseki/react-search/blob/master/example/public/search.css) style sheet is included as a guide. The styles follow [BEM](https://en.bem.info/method/) naming conventions.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
