var SearchItemInArray = function (items, input) {
  var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ''), 'i')

  return items.filter(function (item) {
    if (reg.test(item)) {
      return item
    }
  })
}

module.exports = SearchItemInArray
