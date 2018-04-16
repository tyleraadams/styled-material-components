'use strict';

exports.__esModule = true;
exports.Tabs = exports.TabBar = exports.TabBarContainer = exports.TabsInkBar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  bottom: 0;\n  height: 2px;\n  position: absolute;\n  transition-duration: 200ms;\n  transition-property: left, width;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: ', ';\n  left: ', 'px;\n  width: ', 'px;\n'], ['\n  bottom: 0;\n  height: 2px;\n  position: absolute;\n  transition-duration: 200ms;\n  transition-property: left, width;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: ', ';\n  left: ', 'px;\n  width: ', 'px;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: 100%;\n'], ['\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose([''], ['']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n\n  & [data-smc~=\'Icon\'] {\n    background-color: transparent;\n    color: inherit;\n    fill: currentColor;\n  }\n\n  & [data-smc~=\'Tab\'] {\n    flex: ', ';\n  }\n\n  & [data-smc=\'TabBar\'] {\n    background-color: ', ';\n    ', ';\n  }\n'], ['\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n\n  & [data-smc~=\'Icon\'] {\n    background-color: transparent;\n    color: inherit;\n    fill: currentColor;\n  }\n\n  & [data-smc~=\'Tab\'] {\n    flex: ', ';\n  }\n\n  & [data-smc=\'TabBar\'] {\n    background-color: ', ';\n    ', ';\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../mixins/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TabsInkBar = exports.TabsInkBar = _styledComponents2.default.div(_templateObject, function (props) {
  return props.inkbarColor || props.theme.accent;
}, function (props) {
  return props.left;
}, function (props) {
  return props.width;
});

var TabBarContainer = exports.TabBarContainer = _styledComponents2.default.nav(_templateObject2);

var TabBarComponent = function (_React$PureComponent) {
  _inherits(TabBarComponent, _React$PureComponent);

  function TabBarComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, TabBarComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.state = {
      inkbarPosition: {}
    }, _this.nav = null, _this.mounted = false, _this.resizeInkbar = (0, _lodash2.default)(function () {
      var _this$nav$getBounding = _this.nav.getBoundingClientRect(),
          navLeft = _this$nav$getBounding.left;

      var _this$nav$children$_t = _this.nav.children[_this.props.selectedIndex].getBoundingClientRect(),
          left = _this$nav$children$_t.left,
          width = _this$nav$children$_t.width;

      _this.setState({
        inkbarPosition: {
          left: left - navLeft,
          width: width
        }
      });
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  TabBarComponent.prototype.componentDidMount = function componentDidMount() {
    this.mounted = true;

    window.addEventListener('resize', this.resizeInkbar);
    this.resizeInkbar();
  };

  TabBarComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) return;

    if (nextProps.selectedIndex !== this.props.selectedIndex) {
      this.resizeInkbar();
    }
  };

  TabBarComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;

    window.removeEventListener('resize', this.resizeInkbar);
  };

  TabBarComponent.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        inkbarColor = _props.inkbarColor,
        onClick = _props.onClick,
        showInkbar = _props.showInkbar;


    var tabs = React.Children.map(children, function (child, index) {
      return React.cloneElement(child, {
        index: index,
        selected: _this2.props.selectedIndex === index,
        onClick: onClick
      });
    });

    return React.createElement(
      TabBarContainer,
      {
        'data-smc': 'TabBar',
        innerRef: function innerRef(node) {
          _this2.nav = node;
        }
      },
      tabs,
      showInkbar && this.mounted && React.createElement(TabsInkBar, _extends({ 'data-smc': 'TabsInkBar', inkbarColor: inkbarColor }, this.state.inkbarPosition))
    );
  };

  return TabBarComponent;
}(React.PureComponent);

TabBarComponent.defaultProps = {
  fixed: false,
  selectedIndex: 0,
  showInkbar: true
};


var TabsComponent = function TabsComponent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement(
    'section',
    { className: className, 'data-smc': 'Tabs' },
    children
  );
};

var TabBar = exports.TabBar = (0, _styledComponents2.default)(TabBarComponent)(_templateObject3);

var Tabs = exports.Tabs = (0, _styledComponents2.default)(TabsComponent)(_templateObject4, function (props) {
  return props.fixed ? 1 : 'none';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _theme.contrastingColor)('color', theme.primary);
});