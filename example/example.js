import Search from '../lib/search'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  myFunc (e, results) {
    console.log(e.target.value)
    console.log(results)
    console.log('love coming in to this callback')
  }

  static propTypes () {
    return {
      items: PropTypes.array,
      keys: PropTypes.array,
      searchKey: PropTypes.string
    }
  }

  render () {
    return (
      <div>
        <Search
            items={this.props.items}
            keys={this.props.keys}
            searchKey={this.props.searchKey}
            placeholder='Search for a programming language'
            onChange={this.myFunc} />
      </div>
    )
  }
}

// simple array example

let ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala', 'haskell']
ReactDOM.render(<TestComponent items={ITEMS} />, document.getElementById('root'))

/* 

// array of objects example

let ITEMS = [ 
  { title: 'javascript', description: 'an awesome language' },
  { title: 'ruby', description: 'a cool language' },
  { title: 'haskell', description: 'a functional language' }
]
let KEYS = ['title', 'description']
let KEY = 'title'

ReactDOM.render(<TestComponent items={ITEMS} keys={KEYS} searchKey={KEY} />, document.getElementById('root'))
*/
