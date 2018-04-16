'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  border-color: transparent;\n  background-color: transparent;\n  color: black;\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n  font-size: 17px;\n  cursor: pointer;\n  -webkit-appearance: button; /* hide default arrow in chrome OSX */\n\n  &:focus {\n    outline: none;\n  }\n'], ['\n  border-color: transparent;\n  background-color: transparent;\n  color: black;\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n  font-size: 17px;\n  cursor: pointer;\n  -webkit-appearance: button; /* hide default arrow in chrome OSX */\n\n  &:focus {\n    outline: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: none;\n'], ['\n  display: none;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 0;\n  bottom: 5px;\n  fill: #726969;\n'], ['\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 0;\n  bottom: 5px;\n  fill: #726969;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuItem = require('./Menu/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Menu = require('./Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Dropdown = _styledComponents2.default.select(_templateObject);

var HiddenOption = _styledComponents2.default.option(_templateObject2);

var _Symbol = (0, _styledComponents2.default)(_icons.ArrowDropDownIcon)(_templateObject3);

var DropdownMenu = function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu() {
    var _temp, _this, _ret;

    _classCallCheck(this, DropdownMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isOpen: false,
      options: _this.props.options || [],
      selected: _this.props.defaultOption || 'select one',
      isChrome: undefined
    }, _this.handleClose = function () {
      _this.setState({ isOpen: false });
    }, _this.handleOpen = function () {
      _this.setState({ isOpen: true });
    }, _this.onSelectMenuItem = function (e) {
      if (_this.props.onItemClick) {
        _this.props.onItemClick(e);
      }
      _this.setState({ selected: e.target.value });
    }, _this.toggleSelect = function (e) {
      e.preventDefault();
      _this.setState({ isOpen: !_this.state.isOpen });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /* eslint-disable react/no-did-mount-set-state */
  /*
   * Because Next.js executes its code server-side first,
   * using navigator and window will result to a reference error
   * outside of the componentDidMount method. Therefore, setting
   * the state inside of here is the only way to keep track of what
   * browser is being used on the client side.
   *
   * https://github.com/zeit/next.js/wiki/FAQ
   */

  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
    if (navigator) {
      var isChrome = Boolean(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor));
      this.setState({ isChrome: isChrome });
    }
  };

  DropdownMenu.prototype.render = function render() {
    var _this2 = this;

    var _state = this.state,
        options = _state.options,
        isOpen = _state.isOpen,
        selected = _state.selected,
        isChrome = _state.isChrome;

    return _react2.default.createElement(
      'div',
      { onClick: this.toggleSelect, onFocus: this.handleOpen, tabIndex: '0' },
      !isChrome && _react2.default.createElement(
        Dropdown,
        { defaultValue: selected, onChange: function onChange(e) {
            return _this2.onSelectMenuItem(e);
          } },
        options.map(function (option) {
          return _react2.default.createElement(
            'option',
            { key: option },
            option
          );
        })
      ),
      isChrome && _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          Dropdown,
          { value: selected, hidden: isOpen },
          options.map(function (option) {
            return _react2.default.createElement(
              HiddenOption,
              { key: option },
              option
            );
          })
        ),
        _react2.default.createElement(
          _Menu2.default,
          { 'aria-hidden': 'true', value: selected, open: isOpen, onClose: this.handleClose },
          options.map(function (option) {
            return _react2.default.createElement(
              _MenuItem2.default,
              {
                key: option,
                onClick: function onClick() {
                  return _this2.onSelectMenuItem({ target: { value: option } });
                }
              },
              option
            );
          })
        )
      ),
      _react2.default.createElement(_Symbol, null)
    );
  };

  return DropdownMenu;
}(_react.Component);

exports.default = DropdownMenu;
module.exports = exports['default'];