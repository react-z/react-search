"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  box-shadow: 0.1rem 0.1rem 2rem rgba(0, 0, 0, 0.25);\n  display: block;\n  line-height: 1.5em;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 0.2em;\n  position: absolute;\n  text-decoration: none;\n  width: 100%;\n  z-index: 100;\n  visibility: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  cursor: pointer;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  margin-bottom: 0.2rem;\n  padding: 0.3rem;\n\n  background-color: ", ";\n\n  &:hover {\n    background-color: #ebebeb;\n  }\n\n  span {\n    flex: 1;\n    font-size: 1.3rem;\n    word-wrap: break-word;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0.2rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: 0 !important;\n  background: transparent !important;\n  border-radius: 0;\n  box-shadow: none;\n  font-size: 1.3rem;\n  line-height: normal;\n  margin: 1px 0;\n  outline: 0;\n  padding: 0;\n  position: relative;\n  width: 100%;\n  display: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DropDownIcon = function DropDownIcon() {
  return _react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }), _react.default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};
/**
 * Autocomplete Search component
 **/


var Search =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  _createClass(Search, null, [{
    key: "defaultProps",
    get: function get() {
      return {
        initialSelected: [],
        placeholder: '— None',
        NotFoundPlaceholder: 'Please search for some items...',
        maxSelected: 100,
        multiple: false
      };
    }
  }, {
    key: "propTypes",
    get: function get() {
      return {
        items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
        initialSelected: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.object)]),
        onItemsChanged: _propTypes.default.func,
        placeholder: _propTypes.default.string,
        NotFoundPlaceholder: _propTypes.default.string,
        maxSelected: _propTypes.default.number,
        multiple: _propTypes.default.bool,
        onKeyChange: _propTypes.default.func,
        getItemsAsync: _propTypes.default.func
      };
    }
  }]);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));
    _this.state = {
      menuItems: [],
      selectedItems: [],
      searchValue: '',
      menuVisible: false
    };
    return _this;
  }

  _createClass(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var initialSelected = this.props.initialSelected;

      if (initialSelected instanceof Array) {
        this.setSelected(initialSelected);
      } else {
        this.addSelected(initialSelected);
      }
    }
  }, {
    key: "SearchItemInArrayObjects",
    value: function SearchItemInArrayObjects(items, input, searchKey) {
      var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ''), 'i');
      return items.filter(function (item) {
        if (reg.test(item[searchKey])) {
          return item;
        }
      });
    }
  }, {
    key: "selectMenuItem",
    value: function selectMenuItem(item) {
      var multiple = this.props.multiple;
      multiple ? this.addSelected(item) : this.setSelected([item]);
      this.hideMenu();
    }
  }, {
    key: "showMenu",
    value: function showMenu() {
      this.setState({
        menuVisible: true
      });
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      this.setState({
        menuVisible: false
      });
    }
  }, {
    key: "triggerItemsChanged",
    value: function triggerItemsChanged() {
      if (this.props.onItemsChanged !== undefined) {
        this.props.onItemsChanged(this.state.selectedItems);
      }
    }
  }, {
    key: "triggerKeyChange",
    value: function triggerKeyChange(searchValue) {
      if (this.props.onKeyChange !== undefined) {
        this.props.onKeyChange(searchValue);
      }
    }
  }, {
    key: "triggerGetItemsAsync",
    value: function triggerGetItemsAsync(searchValue) {
      var _this2 = this;

      if (this.props.getItemsAsync !== undefined) {
        this.props.getItemsAsync(searchValue, function () {
          _this2.updateSearchValue(searchValue);
        });
      }
    }
  }, {
    key: "setSelected",
    value: function setSelected(selected) {
      var _this3 = this;

      this.setState({
        selectedItems: selected
      }, function () {
        _this3.triggerItemsChanged();
      });
    }
  }, {
    key: "addSelected",
    value: function addSelected(selected) {
      var _this4 = this;

      var items = this.state.selectedItems;
      items.push(selected);
      this.setState({
        selectedItems: items
      }, function () {
        _this4.triggerItemsChanged();
      });
    }
  }, {
    key: "removeSelected",
    value: function removeSelected(itemId) {
      var _this5 = this;

      var items = this.state.selectedItems;
      var itemsUpdated = items.filter(function (i) {
        return i.id != itemId;
      });
      this.setState({
        selectedItems: itemsUpdated
      }, function () {
        _this5.triggerItemsChanged();
      });
    }
  }, {
    key: "updateSearchValue",
    value: function updateSearchValue(value) {
      var _this6 = this;

      var items = this.props.items;
      this.setState({
        searchValue: value
      }, function () {
        var menuItems = _this6.SearchItemInArrayObjects(items, _this6.state.searchValue, 'value');

        _this6.setMenuItems(menuItems);
      });
    }
  }, {
    key: "showAllMenuItems",
    value: function showAllMenuItems() {
      var items = this.props.items;
      this.setState({
        searchValue: ''
      });
      var menuItems = this.SearchItemInArrayObjects(items, '', 'value');
      this.setMenuItems(menuItems);
    }
  }, {
    key: "setMenuItems",
    value: function setMenuItems(items) {
      var getItemsAsync = this.props.getItemsAsync;
      this.setState({
        menuItems: items
      });

      if (items.length || getItemsAsync != undefined) {
        this.showMenu();
      } else {
        this.hideMenu();
      }
    }
  }, {
    key: "itemSelected",
    value: function itemSelected(itemId) {
      var selectedItems = this.state.selectedItems;
      var item = selectedItems.find(function (s) {
        return s.id === itemId;
      });
      return item != undefined ? true : false;
    }
  }, {
    key: "focusInput",
    value: function focusInput() {
      var _this7 = this;

      this.showAllMenuItems();
      _reactDom.default.findDOMNode(this.refs.searchInput).placeholder = '';
      _reactDom.default.findDOMNode(this.refs.searchInput).value = '';
      this.blurTimeout = setTimeout(function () {
        _reactDom.default.findDOMNode(_this7.refs.searchInput).focus();
      }, 100);
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      var _this8 = this;

      this.blurTimeout = setTimeout(function () {
        _reactDom.default.findDOMNode(_this8.refs.searchInput).blur();

        _this8.hideMenu();
      }, 100);
    }
  }, {
    key: "handleRemove",
    value: function handleRemove(e, id) {
      e.preventDefault();
      e.stopPropagation();
      this.removeSelected(id);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      this.focusInput();
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      this.blurInput();
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      this.focusInput();
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(e) {
      this.focusInput();
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(e) {
      var element = e.currentTarget.children[0];
      var item = {
        id: parseInt(element.dataset.id),
        value: element.innerHTML.replace(/&amp;/g, '&')
      };
      this.selectMenuItem(item);
    }
  }, {
    key: "handleKeyChange",
    value: function handleKeyChange(e) {
      var getItemsAsync = this.props.getItemsAsync;
      var value = this.refs.searchInput.value;
      this.triggerKeyChange(value);

      if (getItemsAsync != undefined) {
        this.triggerGetItemsAsync(value);
      } else {
        this.updateSearchValue(value);
      }
    }
  }, {
    key: "renderMenuItems",
    value: function renderMenuItems() {
      var _this9 = this;

      var _this$state = this.state,
          menuItems = _this$state.menuItems,
          selectedItems = _this$state.selectedItems;
      var NotFoundPlaceholder = this.props.NotFoundPlaceholder;

      if (!menuItems.length) {
        return _react.default.createElement(ListItem, {
          style: {
            color: '#ff6961'
          }
        }, _react.default.createElement("span", {
          "data-id": 0
        }, NotFoundPlaceholder));
      }

      var items = menuItems.map(function (item, i) {
        if (_this9.itemSelected(item.id)) {
          return _react.default.createElement(ListItem, {
            key: i,
            style: {
              color: '#ebebeb'
            }
          }, _react.default.createElement("span", {
            key: i,
            "data-id": item.id,
            dangerouslySetInnerHTML: {
              __html: item.value
            }
          }));
        } else {
          return _react.default.createElement(ListItem, {
            key: i,
            onClick: _this9.handleSelect.bind(_this9)
          }, _react.default.createElement("span", {
            key: i,
            "data-id": item.id,
            dangerouslySetInnerHTML: {
              __html: item.value
            }
          }));
        }
      });
      return items;
    }
  }, {
    key: "renderSelectedItems",
    value: function renderSelectedItems() {
      var _this10 = this;

      var selectedItems = this.state.selectedItems;
      var _this$props = this.props,
          multiple = _this$props.multiple,
          placeholder = _this$props.placeholder;
      if (!selectedItems.length && multiple) return;

      if (!selectedItems.length && !multiple) {
        return _react.default.createElement(ListItem, {
          onClick: this.handleItemClick.bind(this)
        }, _react.default.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: placeholder
          }
        }), _react.default.createElement(DropDownIcon, null));
      }

      var items = selectedItems.map(function (item, i) {
        return _react.default.createElement(ListItem, {
          key: i,
          onClick: _this10.handleItemClick.bind(_this10)
        }, _react.default.createElement("span", {
          "data-id": item.id,
          dangerouslySetInnerHTML: {
            __html: item.value
          }
        }), _react.default.createElement("svg", {
          onClick: function onClick(e) {
            return _this10.handleRemove(e, item.id);
          },
          width: "18",
          height: "18",
          viewBox: "0 0 24 24"
        }, _react.default.createElement("g", {
          fill: "currentColor",
          fillRule: "evenodd"
        }, _react.default.createElement("path", {
          d: "M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z"
        }), _react.default.createElement("path", {
          d: "M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z"
        }))), !multiple && _react.default.createElement(DropDownIcon, null));
      });
      return items;
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props2 = this.props,
          maxSelected = _this$props2.maxSelected,
          multiple = _this$props2.multiple;
      var selectedItems = this.state.selectedItems;
      var visible = true;

      if (multiple && selectedItems.length >= maxSelected) {
        visible = false;
      }

      return _react.default.createElement(Input, {
        type: "text",
        visible: visible,
        ref: "searchInput",
        placeholder: this.props.placeholder,
        onClick: this.handleClick.bind(this),
        onFocus: this.handleFocus.bind(this),
        onBlur: this.handleBlur.bind(this),
        onKeyUp: this.handleKeyChange.bind(this)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          maxSelected = _this$props3.maxSelected,
          multiple = _this$props3.multiple;
      var _this$state2 = this.state,
          menuVisible = _this$state2.menuVisible,
          selectedItems = _this$state2.selectedItems;
      var showMenu = false;

      if (menuVisible && !multiple) {
        showMenu = true;
      }

      if (menuVisible && selectedItems.length < maxSelected) {
        showMenu = true;
      }

      return _react.default.createElement(Autocomplete, null, _react.default.createElement(List, null, this.renderSelectedItems()), multiple && this.renderInput(), _react.default.createElement(MenuWrapper, null, _react.default.createElement(Menu, {
        visible: showMenu,
        ref: "autocomplete"
      }, !multiple && this.renderInput(), _react.default.createElement(List, null, this.renderMenuItems()))));
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;

var Autocomplete = _styledComponents.default.div(_templateObject());

var Input = _styledComponents.default.input(_templateObject2(), function (props) {
  return props.visible ? 'block' : 'none';
});

var List = _styledComponents.default.ul(_templateObject3());

var ListItem = _styledComponents.default.li(_templateObject4(), function (props) {
  return props.selected ? '#ebebeb' : '#fff';
});

var MenuWrapper = _styledComponents.default.div(_templateObject5());

var Menu = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.visible ? 'visible' : 'hidden';
});