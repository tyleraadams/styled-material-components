'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  margin: 8px 0;\n  padding: 0;\n  list-style: none;\n  width: auto;\n'], ['\n  position: relative;\n  margin: 8px 0;\n  padding: 0;\n  list-style: none;\n  width: auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuListComponent = function (_React$Component) {
  _inherits(MenuListComponent, _React$Component);

  function MenuListComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, MenuListComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleKeyDown = function (event) {
      var currItem = document.activeElement;

      event.preventDefault();
      if (!event.shiftKey && event.keyCode === 9) {
        // tab
        currItem.nextElementSibling.focus();
      }
      if (event.shiftKey && event.keyCode === 9) {
        // shift + tab
        currItem.previousSibling.focus();
      }
      if (event.keyCode === 38) {
        // up arrow
        currItem.previousSibling ? currItem.previousSibling.focus() : currItem.focus();
      }
      if (event.keyCode === 40) {
        // down arrow
        currItem.nextElementSibling ? currItem.nextElementSibling.focus() : currItem.focus();
      }
      if (event.keyCode === 27) {
        // esc
        if (_this.props.onClose) _this.props.onClose();
        document.activeElement.blur();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MenuListComponent.prototype.componentDidMount = function componentDidMount() {
    (0, _reactDom.findDOMNode)(this.menuList).firstChild.focus();
  };

  MenuListComponent.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'ul',
      {
        role: 'menu',
        className: this.props.className + ' smc-menu-list',
        ref: function ref(_ref) {
          _this2.menuList = _ref;
        },
        onKeyDown: this.handleKeyDown },
      this.props.children
    );
  };

  return MenuListComponent;
}(_react2.default.Component);

var MenuList = (0, _styledComponents2.default)(MenuListComponent)(_templateObject);

exports.default = MenuList;
module.exports = exports['default'];