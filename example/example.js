import Search from '../lib/search'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  myFunc (e) {
    console.log(e.target.value)
    console.log('love coming in to this callback')
  }

  static propTypes () {
    return {
      items: PropTypes.array
    }
  }

  render () {
    return (
      <div>
        <Search
            items={this.props.items}
            placeHolder='Search for a programming language'
            onChange={this.myFunc}
        />
      </div>
    )
  }
}

let ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala', 'haskell']
ReactDOM.render(<TestComponent items={ITEMS} />, document.getElementById('root'))
