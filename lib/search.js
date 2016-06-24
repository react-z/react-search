'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SearchItemInArray = require('./SearchItemInArray');

var _SearchItemInArray2 = _interopRequireDefault(_SearchItemInArray);

var _SearchItemInArrayObjects = require('./SearchItemInArrayObjects');

var _SearchItemInArrayObjects2 = _interopRequireDefault(_SearchItemInArrayObjects);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Search component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A simple search component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **/


var Search = function (_Component) {
  _inherits(Search, _Component);

  _createClass(Search, null, [{
    key: 'defaultProps',
    get: function get() {
      return {
        ItemElement: 'a',
        classPrefix: 'react-search'
      };
    }
  }, {
    key: 'propTypes',
    get: function get() {
      return {
        classPrefix: _react.PropTypes.string,
        items: _react.PropTypes.array.isRequired,
        searchKey: _react.PropTypes.string,
        keys: _react.PropTypes.array,
        placeholder: _react.PropTypes.string,
        onChange: _react.PropTypes.func,
        onClick: _react.PropTypes.func,
        ItemElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string])
      };
    }
  }]);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));

    _this.state = { matchingItems: [] };
    return _this;
  }

  _createClass(Search, [{
    key: 'changeInput',
    value: function changeInput(e) {
      this.refs.autocomplete.className = this.props.classPrefix + '__menu ' + this.props.classPrefix + '__menu--open';
      var searchValue = this.refs.searchInput.value;

      var result = void 0;

      if (this.props.keys !== undefined && this.props.searchKey !== undefined) {
        /* hash */
        result = (0, _SearchItemInArrayObjects2.default)(this.props.items, searchValue, this.props.searchKey);
      } else {
        /* array */
        result = (0, _SearchItemInArray2.default)(this.props.items, searchValue);
      }

      this.setState({ matchingItems: result });

      if (this.props.onChange !== undefined) {
        this.props.onChange(e, result);
      }
    }
  }, {
    key: 'selectAutoComplete',
    value: function selectAutoComplete(e) {
      this.refs.autocomplete.className = this.props.classPrefix + '__menu ' + this.props.classPrefix + '__menu--hidden';
      var result = void 0;
      if (e.currentTarget.children.length) {
        result = e.currentTarget.children[0].innerHTML;
      } else {
        result = e.currentTarget.innerHTML;
      }
      this.refs.searchInput.value = result;

      if (this.props.onClick !== undefined) {
        this.props.onClick(e, result);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var ItemElement = this.props.ItemElement;

      var inputClassName = this.props.classPrefix + '__input';
      var menuClassName = this.props.classPrefix + '__menu ' + this.props.classPrefix + '__menu--hidden';

      var items = [];

      if (this.props.keys !== undefined) {
        /* items for hash results */
        items = this.state.matchingItems.map(function (item, i) {
          return _react2.default.createElement(
            'li',
            { key: i,
              className: _this2.props.classPrefix + '__menu-item',
              onClick: _this2.selectAutoComplete.bind(_this2) },
            _this2.props.keys.map(function (itemKey, j) {
              return _react2.default.createElement(
                ItemElement,
                { key: j },
                item[itemKey]
              );
            })
          );
        });
      } else {
        /* items for a simple array */
        items = this.state.matchingItems.map(function (item, i) {
          return _react2.default.createElement(
            'li',
            { key: i, className: _this2.props.classPrefix + '__menu-item' },
            _react2.default.createElement(
              ItemElement,
              { onClick: _this2.selectAutoComplete.bind(_this2) },
              item
            )
          );
        });
      }

      return _react2.default.createElement(
        'div',
        { className: this.props.classPrefix },
        _react2.default.createElement('input', {
          type: 'text',
          className: inputClassName,
          placeholder: this.props.placeholder,
          ref: 'searchInput',
          onKeyUp: this.changeInput.bind(this) }),
        _react2.default.createElement(
          'div',
          { className: menuClassName, ref: 'autocomplete' },
          _react2.default.createElement(
            'ul',
            { className: this.props.classPrefix + '__menu-items' },
            items
          )
        )
      );
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;