import expect from 'expect'
import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Search from '../src/Search'

test('Search component', t => {
  const changed = () => {
    console.log('just changed...')
  }

  let items = [
    { id: 0, value: 'ruby' },
    { id: 1, value: 'javascript' },
    { id: 2, value: 'lua' },
    { id: 3, value: 'go' },
    { id: 4, value: 'julia' }
  ]
  const wrapper = mount(
    <Search
      items={items}
      placeholder="Pick your language"
      max_selected={3}
      multiple={true}
      onItemsChanged={changed}
    />
  )

  t.pass(expect(wrapper.props().items).toEqual(items))

  t.pass(expect(wrapper.props().max_selected).toEqual(3))

  t.pass(expect(wrapper.props().onItemsChanged).toEqual(changed))

  t.end()
})
