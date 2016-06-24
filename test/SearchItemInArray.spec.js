import expect from 'expect'
import test from 'tape'
import SearchItemInArray from '../src/SearchItemInArray'

test('SearchItemInArray function', (t) => {

  let ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala', 'haskell']

  t.pass(
    expect( SearchItemInArray(ITEMS, 'jav')[0] ).toEqual('javascript')
  )

  t.pass(
    expect( SearchItemInArray(ITEMS, ' ') ).toEqual([])
  )

  t.end()
});
