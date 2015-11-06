/**
 * Search module
 * A simple search component.
**/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _SearchItemInArray = require('./SearchItemInArray');

var _SearchItemInArray2 = _interopRequireDefault(_SearchItemInArray);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Search = (function (_Component) {
  _inherits(Search, _Component);

  _createClass(Search, null, [{
    key: 'defaultProps',
    value: function defaultProps() {
      return {
        ItemElement: _react2['default'].DOM.a,
        classPrefix: 'react-search'
      };
    }
  }, {
    key: 'propTypes',
    value: function propTypes() {
      return {
        classPrefix: _react.PropTypes.string,
        items: _react.PropTypes.array.required,
        placeHolder: _react.PropTypes.string,
        onChange: _react.PropTypes.func,
        onClick: _react.PropTypes.func,
        ItemElement: _react.PropTypes.element,
        itemElemProps: _react.PropTypes.object,
        inputProps: _react.PropTypes.object,
        itemProps: _react.PropTypes.object,
        autoCompleteListProps: _react.PropTypes.object,
        autoCompleteProps: _react.PropTypes.object,
        wrapperProps: _react.PropTypes.object
      };
    }
  }]);

  function Search(props) {
    _classCallCheck(this, Search);

    _get(Object.getPrototypeOf(Search.prototype), 'constructor', this).call(this, props);
    this.state = {
      matchingItems: []
    };
  }

  _createClass(Search, [{
    key: 'changeInput',
    value: function changeInput(e) {
      if (typeof this.props.onChange !== 'undefined') {
        this.props.onChange(e);
      }

      var autocomplete = this.refs.autocomplete;
      autocomplete.className = this.props.classPrefix + '__menu ' + this.props.classPrefix + '__menu--open';
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
      autocomplete.className = this.props.classPrefix + '__menu ' + this.props.classPrefix + '__menu--hidden';
      var result = e.target.innerHTML;
      this.refs.searchInput.value = result;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var _props = this.props;
      var ItemElement = _props.ItemElement;
      var _props$inputProps = _props.inputProps;
      var inputProps = _props$inputProps === undefined ? {} : _props$inputProps;
      var _props$itemElemProps = _props.itemElemProps;
      var itemElemProps = _props$itemElemProps === undefined ? {} : _props$itemElemProps;
      var _props$itemProps = _props.itemProps;
      var itemProps = _props$itemProps === undefined ? {} : _props$itemProps;
      var _props$autoCompleteListProps = _props.autoCompleteListProps;
      var autoCompleteListProps = _props$autoCompleteListProps === undefined ? {} : _props$autoCompleteListProps;
      var _props$autoCompleteProps = _props.autoCompleteProps;
      var autoCompleteProps = _props$autoCompleteProps === undefined ? {} : _props$autoCompleteProps;
      var _props$wrapperProps = _props.wrapperProps;
      var wrapperProps = _props$wrapperProps === undefined ? {} : _props$wrapperProps;

      var inputClassName = this.props.classPrefix + '__input';
      var menuClassName = this.props.classPrefix + '__menu ' + this.props.classPrefix + '__menu--hidden';

      var items = this.state.matchingItems.map(function (item, i) {
        return _react2['default'].createElement(
          'li',
          _extends({ key: i, className: _this.props.classPrefix + '__menu-item' }, itemProps),
          _react2['default'].createElement(
            ItemElement,
            _extends({}, itemElemProps, { onClick: _this.selectAutoComplete.bind(_this) }),
            item
          )
        );
      });

      return _react2['default'].createElement(
        'div',
        _extends({ className: this.props.classPrefix }, wrapperProps),
        _react2['default'].createElement('input', _extends({
          type: 'text',
          className: inputClassName,
          placeholder: this.props.placeHolder,
          ref: 'searchInput',
          onKeyUp: this.changeInput.bind(this)
        }, inputProps)),
        _react2['default'].createElement(
          'div',
          _extends({ className: menuClassName, ref: 'autocomplete' }, autoCompleteProps),
          _react2['default'].createElement(
            'ul',
            _extends({ className: this.props.classPrefix + '__menu-items' }, autoCompleteListProps),
            items
          )
        )
      );
    }
  }]);

  return Search;
})(_react.Component);

module.exports = Search;