var test = require('tape');
var SecondsTohhmmss = require('../js/SecondsTohhmmss.js');

test('basic arithmetic', function (t) {
    t.equal(SecondsTohhmmss(2), "00:00:00.02");
    t.equal(SecondsTohhmmss(70), "00:00:01.10");
    t.end();
});
