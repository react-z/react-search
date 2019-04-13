/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Search from '../Search'

test('Search renders correctly and matches snapshot', () => {
  const handleItemsChanged = jest.fn()
  const items = [
    { id: 0, value: 'ruby' },
    { id: 1, value: 'javascript' },
    { id: 2, value: 'lua' },
  ]

  const component = renderer.create(
    <Search
      items={items}
      placeholder="Pick your language"
      maxSelected={3}
      multiple={true}
      onItemsChanged={handleItemsChanged}
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Search renders the correct elements and props', () => {
  const handleItemsChanged = jest.fn()
  const items = [
    { id: 0, value: 'ruby' },
    { id: 1, value: 'javascript' },
    { id: 2, value: 'lua' },
  ]

  const wrapper = shallow(
    <Search
      items={items}
      placeholder="Pick your language"
      maxSelected={3}
      multiple={true}
      onItemsChanged={handleItemsChanged}
    />
  )

  expect(wrapper.instance().props.maxSelected).toEqual(3)
  expect(wrapper.instance().props.multiple).toEqual(true)
  expect(wrapper.instance().props.onItemsChanged).toEqual(handleItemsChanged)

  // console.log(wrapper.debug())
  expect(wrapper.find('#search-input').length).toEqual(1)
  expect(wrapper.find('span').text()).toEqual('Please search for some items...')
})
