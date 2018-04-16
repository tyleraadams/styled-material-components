'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 0;\n  position: absolute;\n  box-sizing: border-box;\n  border-radius: 2px;\n  overflow: hidden;\n  display: inline-block;\n  min-width: 72px;\n  max-width: 280px;\n  z-index: 5;\n  background: #fff;\n  ', ';\n'], ['\n  padding: 0;\n  position: absolute;\n  box-sizing: border-box;\n  border-radius: 2px;\n  overflow: hidden;\n  display: inline-block;\n  min-width: 72px;\n  max-width: 280px;\n  z-index: 5;\n  background: #fff;\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _elevation = require('../../mixins/elevation');

var _elevation2 = _interopRequireDefault(_elevation);

var _MenuList = require('./MenuList');

var _MenuList2 = _interopRequireDefault(_MenuList);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuComponent = function (_Component) {
  _inherits(MenuComponent, _Component);

  function MenuComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, MenuComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.menu.contains(event.target)) return;
      _this.props.onClose && _this.props.onClose(event);
    }, _this.recalculatePosition = (0, _lodash2.default)(function () {
      var _this2 = _this,
          anchorEl = _this2.props.anchorEl,
          menu = _this2.menu;

      if (!anchorEl || !menu) return;
      var menuRect = _this.menu.getBoundingClientRect();
      var anchorRect = anchorEl.getBoundingClientRect();
      var anchorLeft = anchorRect.x + window.scrollX;
      var anchorTop = anchorRect.y + window.scrollY;
      var overBottom = anchorTop + menuRect.height > window.innerHeight;
      var overRight = anchorLeft + menuRect.width > window.innerWidth;
      _this.menu.style.top = anchorTop - (overBottom ? menuRect.height - anchorRect.height : 0) + 'px';
      _this.menu.style.left = anchorLeft - (overRight ? menuRect.width - anchorRect.width : 0) + 'px';
    }, 0), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MenuComponent.prototype.componentDidMount = function componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
    document.addEventListener('touchstart', this.handleClick);
    document.addEventListener('scroll', this.recalculatePosition);
    window.addEventListener('resize', this.recalculatePosition);
  };

  MenuComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
    document.removeEventListener('touchstart', this.handleClick);
    document.removeEventListener('scroll', this.recalculatePosition);
    window.removeEventListener('resize', this.recalculatePosition);
  };

  MenuComponent.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        className = _props.className,
        children = _props.children,
        menuItems = _props.menuItems,
        open = _props.open,
        onClose = _props.onClose;

    var renderMenuItems = open && menuItems && menuItems.length > 0;
    var renderChildren = open && !menuItems;
    return _react2.default.createElement(
      'div',
      {
        className: className + ' smc-Menu',
        ref: function ref(_ref) {
          _this3.menu = _ref;
          _this3.recalculatePosition();
        }
      },
      renderChildren && _react2.default.createElement(
        _MenuList2.default,
        { onKeyDown: this.handleKeyDown, onClose: onClose },
        children
      ),
      renderMenuItems && _react2.default.createElement(
        _MenuList2.default,
        { onKeyDown: this.handleKeyDown, onClose: onClose },
        menuItems.map(function (item) {
          return _react2.default.createElement(
            _MenuItem2.default,
            { key: item.text, onClick: item.onClick },
            item.text
          );
        })
      )
    );
  };

  return MenuComponent;
}(_react.Component);

var Menu = (0, _styledComponents2.default)(MenuComponent)(_templateObject, (0, _elevation2.default)(3));

exports.default = Menu;
module.exports = exports['default'];