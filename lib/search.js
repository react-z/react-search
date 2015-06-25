'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchItemInArray = require('./SearchItemInArray');

var _SearchItemInArray2 = _interopRequireDefault(_SearchItemInArray);

/**
 * Search module
 * A simple search box component.
**/

var Search = _react2['default'].createClass({
  displayName: 'Search',

  getInitialState: function getInitialState() {
    return { matchingItems: [] };
  },

  propTypes: {
    onChange: _react2['default'].PropTypes.func,
    onClick: _react2['default'].PropTypes.func
  },

  /** 
   * Input box text has changed, trigger update of the autocomplete box.
  **/
  changeInput: function changeInput(e) {

    /* On change input, trigger callback function. */
    if (typeof this.props.onChange !== 'undefined') {
      this.props.onChange(e);
    };

    var autocomplete = this.refs.autocomplete.getDOMNode();
    autocomplete.className = 'menu menu-open';
    var searchValue = this.refs.searchInput.getDOMNode().value;
    var result = (0, _SearchItemInArray2['default'])(this.props.items, searchValue);
    this.setState({ matchingItems: result });
  },
  /** 
   * On selection of item, set the selected item.
  **/
  selectAutoComplete: function selectAutoComplete(e) {

    /* On selection of item, trigger callback function */
    if (typeof this.props.onClick !== 'undefined') {
      this.props.onClick(e);
    };

    var autocomplete = this.refs.autocomplete.getDOMNode();
    autocomplete.className = 'menu menu-hidden';
    var result = e.target.innerHTML;
    this.refs.searchInput.getDOMNode().value = result;
  },
  render: function render() {
    var _this = this;

    var items = this.state.matchingItems.map((function (item, i) {
      return _react2['default'].createElement(
        'li',
        { key: i },
        _react2['default'].createElement(
          'a',
          { onClick: _this.selectAutoComplete },
          item
        )
      );
    }).bind(this));

    return _react2['default'].createElement(
      'div',
      { className: 'react-search' },
      _react2['default'].createElement('input', { type: 'text',
        className: 'input-text',
        ref: 'searchInput',
        onKeyUp: this.changeInput }),
      _react2['default'].createElement(
        'div',
        { className: 'menu menu-hidden', ref: 'autocomplete' },
        _react2['default'].createElement(
          'ul',
          null,
          items
        )
      )
    );
  }
});

module.exports = Search;