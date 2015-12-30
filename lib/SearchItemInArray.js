'use strict';

var SearchItemInArray = function SearchItemInArray(items, input) {
  if (input.trim() === '') {
    return [];
  }
  var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ''), 'i');

  return items.filter(function (item) {
    if (reg.test(item)) {
      return item;
    }
  });
};

module.exports = SearchItemInArray;