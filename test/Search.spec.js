import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Search from '../src/Search'

test('Search component', (t) => {
  setupJsdom()

  const changed = () => {
    console.log('just changed...')
  }

  let ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala', 'haskell']

  const wrapper = mount(
    <Search items={ITEMS} placeholder='Search for a programming language' onChange={changed} />
  )

  t.pass(
    expect(wrapper.props().items).toEqual(ITEMS)
  )

  t.pass(
    expect(wrapper.props().onChange).toEqual(changed)
  )

  t.end()
});
