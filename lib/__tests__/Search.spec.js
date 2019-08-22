"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Search = _interopRequireDefault(require("../Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Search renders correctly and matches snapshot', function () {
  var handleItemsChanged = jest.fn();
  var items = [{
    id: 0,
    value: 'ruby'
  }, {
    id: 1,
    value: 'javascript'
  }, {
    id: 2,
    value: 'lua'
  }];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Search.default, {
    items: items,
    placeholder: "Pick your language",
    maxSelected: 3,
    multiple: true,
    onItemsChanged: handleItemsChanged
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Search renders the correct elements and props', function () {
  var handleItemsChanged = jest.fn();
  var items = [{
    id: 0,
    value: 'ruby'
  }, {
    id: 1,
    value: 'javascript'
  }, {
    id: 2,
    value: 'lua'
  }];
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Search.default, {
    items: items,
    placeholder: "Pick your language",
    maxSelected: 3,
    multiple: true,
    onItemsChanged: handleItemsChanged
  }));
  expect(wrapper.instance().props.maxSelected).toEqual(3);
  expect(wrapper.instance().props.multiple).toEqual(true);
  expect(wrapper.instance().props.onItemsChanged).toEqual(handleItemsChanged); // console.log(wrapper.debug())

  expect(wrapper.find('#search-input').length).toEqual(1);
  expect(wrapper.find('span').text()).toEqual('Please search for some items...');
});