require('./_test-helper')
import test from 'ava'


import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import Search from '../lib/search'
import SearchItemInArray from '../src/SearchItemInArray'

const {
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithTag,
  renderIntoDocument
} = ReactTestUtils
const items = ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan']

test('search items in array returns correctly', t => {
  t.is(SearchItemInArray(items, 'ste')[0], 'Steven')
  t.end()
})

test('return empty list for empty string search', t => {
  t.same(SearchItemInArray(items, '   '), [])
  t.end()
})

test('renders text input, autocomplete, and an empty list of items', t => {
  const component = renderIntoDocument(
    <Search items={items} />
  )
  const input = findRenderedDOMComponentWithTag(component, 'input')
  const autocomplete = component.refs.autocomplete
  const listOfItems = scryRenderedDOMComponentsWithTag(component, 'li')
  t.ok(input)
  t.ok(autocomplete)
  t.ok(listOfItems)
  t.ok(listOfItems.length === 0)
  t.end()
})

// Currently skipped b/c it throws a weird rendering error
// test('searching for items populates the autocomplete list', t => {
//   const component = renderIntoDocument(
//     <Search items={items}
//     />
//   )
//   const value = 'ste'
//   const input = component.refs.searchInput
//   Simulate.keyUp(input, {
//     target: { value }
//   })
//   const listOfItems = scryRenderedDOMComponentsWithTag(component, 'li')
//   t.ok(listOfItems)
//   t.ok(listOfItems.length !== 0)
//   t.ok(listOfItems.length === 2)
//   t.end()
// })
