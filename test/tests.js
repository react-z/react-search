var test = require('tape');
var SearchItemInArray = require('../js/SearchItemInArray.js');
var items = ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan'];

test('search items in array returns correctly', function (t) {
    t.equal(SearchItemInArray(items, "ste")[0], 'Steven');
    t.end();
});
