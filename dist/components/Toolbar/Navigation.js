'use strict';

exports.__esModule = true;
exports.Navigation = exports.NavigationItem = exports.InkBar = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background-color: ', ';\n  display: block;\n  height: 3px;\n  position: absolute;\n  bottom: 0px;\n  left: ', 'px;\n  width: ', 'px;\n  transition: left 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  will-change: left;\n'], ['\n  background-color: ', ';\n  display: block;\n  height: 3px;\n  position: absolute;\n  bottom: 0px;\n  left: ', 'px;\n  width: ', 'px;\n  transition: left 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  will-change: left;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  cursor: pointer;\n'], ['\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  cursor: pointer;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  position: relative;\n  height: 100%;\n'], ['\n  position: relative;\n  height: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationContainer = function (_Component) {
  _inherits(NavigationContainer, _Component);

  function NavigationContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, NavigationContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      width: 0,
      offset: 0,
      active: _this.props.active
    }, _this.resizeInkBar = (0, _lodash2.default)(function () {
      var element = document.querySelector('div[data-smc="AppbarNavigationItem-' + _this.props.active + '"]');
      if (!element) return;
      _this.setState(function () {
        return {
          width: element.clientWidth,
          offset: element.offsetLeft
        };
      });
    }, 100), _temp), _possibleConstructorReturn(_this, _ret);
  }

  NavigationContainer.prototype.componentDidMount = function componentDidMount() {
    this.resizeInkBar();
    window.addEventListener('resize', this.resizeInkBar);
  };

  NavigationContainer.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      this.resizeInkBar();
    }
  };

  NavigationContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.resizeInkBar);
  };

  NavigationContainer.prototype.render = function render() {
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      this.props.children,
      _react2.default.createElement(InkBar, { width: this.state.width, offset: this.state.offset })
    );
  };

  return NavigationContainer;
}(_react.Component);

var InkBar = exports.InkBar = _styledComponents2.default.div.attrs({
  'aria-hidden': true
})(_templateObject, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.offset;
}, function (props) {
  return props.width;
});

var NavigationItem = exports.NavigationItem = _styledComponents2.default.div.attrs({
  'data-smc': function dataSmc(props) {
    return 'AppbarNavigationItem-' + props.navKey;
  }
})(_templateObject2);

var Navigation = exports.Navigation = (0, _styledComponents2.default)(NavigationContainer)(_templateObject3);