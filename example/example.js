import Search from '../lib/search'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class SearchTestComponent extends Component {

  myFunc (e, results) {
    console.log(e.target.value)
    console.log(results)
  }

  render () {
    let ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala', 'haskell']

    return (
      <div>
        <Search items={ITEMS} placeholder='Search for a programming language' onChange={this.myFunc.bind(this)} />
      </div>
    )
  }
}

class SearchTestArrayComponent extends Component {

  render () {
    let ITEMS = [
      { title: 'javascript', description: 'an awesome language' },
      { title: 'ruby', description: 'a cool language' },
      { title: 'haskell', description: 'a functional language' }
    ]
    let KEYS = ['title', 'description']
    let KEY = 'title'

    return (
      <div>
        <Search items={ITEMS} keys={KEYS} searchKey={KEY} placeholder='Search for a programming language' />
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <SearchTestComponent />
    <SearchTestArrayComponent />
  </div>
  , document.getElementById('root'))
