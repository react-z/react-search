import Search from '../lib/Search' /* 'react-search' */
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
