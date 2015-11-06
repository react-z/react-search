import test from 'ava'
import SearchItemInArray from '../src/SearchItemInArray'

const items = ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan']

test('search items in array returns correctly', t => {
  t.is(SearchItemInArray(items, 'ste')[0], 'Steven')
  t.end()
})
