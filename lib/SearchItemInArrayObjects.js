'use strict';

var SearchItemInArrayObjects = function SearchItemInArrayObjects(items, input, searchKey) {
  if (input.trim() === '' || searchKey === undefined) {
    return [];
  }
  var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ''), 'i');

  return items.filter(function (item) {
    if (reg.test(item[searchKey])) {
      return item;
    }
  });
};

module.exports = SearchItemInArrayObjects;