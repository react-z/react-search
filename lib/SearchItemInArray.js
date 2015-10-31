'use strict';

var SearchItemInArray = function SearchItemInArray(items, input) {

  var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');

  return items.filter(function (item) {
    if (item.match(reg)) {
      return item;
    }
  });
};

module.exports = SearchItemInArray;