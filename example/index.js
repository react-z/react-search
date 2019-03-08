import Search from '../lib/Search' /* 'react-search' */
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  handleItemsChange(items) {
    console.log(items)
  }

  constructor (props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  getItemsAsync(searchValue, cb) {
    let url = `https://api.github.com/search/repositories?q=${searchValue}&language=javascript&sort=stars&order=desc`
    fetch(url).then( (response) => {
      return response.json();
    }).then((results) => {
      if(results.items != undefined){
        let items = results.items.map( (res, i) => { return { id: i, value: res.full_name } })
        this.setState({ repos: items })
        cb(searchValue)
      }
    });
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
                maxSelected={3}
                multiple={true}
                onItemsChanged={this.handleItemsChange.bind(this)} />

        <Search items={this.state.repos}
                multiple={true}
                getItemsAsync={this.getItemsAsync.bind(this)}
                onItemsChanged={this.handleItemsChange.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root'))
