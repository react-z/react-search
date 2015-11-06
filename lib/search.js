/**
 * Search module
 * A simple search component.
**/
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _SearchItemInArray = require('./SearchItemInArray');

var _SearchItemInArray2 = _interopRequireDefault(_SearchItemInArray);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var Search = (function (_Component) {
  function Search() {
    _classCallCheck(this, Search);

    _get(Object.getPrototypeOf(Search.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      matchingItems: []
    };
  }

  _inherits(Search, _Component);

  _createClass(Search, [{
    key: 'changeInput',
    value: function changeInput(e) {
      if (typeof this.props.onChange !== 'undefined') {
        this.props.onChange(e);
      }

      var autocomplete = this.refs.autocomplete;
      autocomplete.className = this.props.className + '__menu ' + this.props.className + '__menu--open';
      var searchValue = this.refs.searchInput.value;
      var result = (0, _SearchItemInArray2['default'])(this.props.items, searchValue);
      this.setState({ matchingItems: result });
    }
  }, {
    key: 'selectAutoComplete',
    value: function selectAutoComplete(e) {

      if (typeof this.props.onClick !== 'undefined') {
        this.props.onClick(e);
      }

      var autocomplete = this.refs.autocomplete;
      autocomplete.className = this.props.className + '__menu ' + this.props.className + '__menu--hidden';
      var result = e.target.innerHTML;
      this.refs.searchInput.value = result;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var inputClassName = this.props.className + '__input';
      var menuClassName = this.props.className + '__menu ' + this.props.className + '__menu--hidden';

      var items = this.state.matchingItems.map(function (item, i) {
        return _react2['default'].createElement(
          'li',
          { key: i, className: _this.props.className + '__menu-item' },
          _react2['default'].createElement(
            'a',
            { onClick: _this.selectAutoComplete.bind(_this) },
            item
          )
        );
      });

      return _react2['default'].createElement(
        'div',
        { className: this.props.className },
        _react2['default'].createElement('input', { type: 'text',
          className: inputClassName,
          placeholder: this.props.placeHolder,
          ref: 'searchInput',
          onKeyUp: this.changeInput.bind(this) }),
        _react2['default'].createElement(
          'div',
          { className: menuClassName, ref: 'autocomplete' },
          _react2['default'].createElement(
            'ul',
            { className: this.props.className + '__menu-items' },
            items
          )
        )
      );
    }
  }], [{
    key: 'defaultProps',
    value: {
      className: 'react-search'
    },
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      items: _react.PropTypes.array,
      placeHolder: _react.PropTypes.string,
      onChange: _react.PropTypes.func,
      onClick: _react.PropTypes.func
    },
    enumerable: true
  }]);

  return Search;
})(_react.Component);

module.exports = Search;