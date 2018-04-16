'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  from {\n    bottom: -48px;\n  }\n  to {\n    bottom: 0px;\n  }\n'], ['\n  from {\n    bottom: -48px;\n  }\n  to {\n    bottom: 0px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  from {\n    bottom: 0px;\n  }\n  to {\n    bottom: -48px;\n  }\n'], ['\n  from {\n    bottom: 0px;\n  }\n  to {\n    bottom: -48px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  from {\n    bottom: -80px;\n  }\n  to {\n    bottom: 0px;\n  }\n'], ['\n  from {\n    bottom: -80px;\n  }\n  to {\n    bottom: 0px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  from {\n    bottom: 0px;\n  }\n  to {\n    bottom: -80px;\n  }\n'], ['\n  from {\n    bottom: 0px;\n  }\n  to {\n    bottom: -80px;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  position: relative;\n  font-size: 14px;\n  max-height: ', ';\n  ', ';\n  ', ';\n  overflow: hidden;\n'], ['\n  position: relative;\n  font-size: 14px;\n  max-height: ', ';\n  ', ';\n  ', ';\n  overflow: hidden;\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  animation: ', ';\n  bottom: ', ';\n'], ['\n  animation: ', ';\n  bottom: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  display: ', ';\n  position: fixed;\n  left: ', ';\n  transform: ', ';\n  height: ', ';\n  min-width: ', ';\n  max-width: ', ';\n  border-radius: 2px 2px 0 0;\n  font-family: lato, sans-serif;\n  background-color: #323232;\n  color: #fff;\n  padding: ', ';\n  box-sizing: border-box;\n'], ['\n  display: ', ';\n  position: fixed;\n  left: ', ';\n  transform: ', ';\n  height: ', ';\n  min-width: ', ';\n  max-width: ', ';\n  border-radius: 2px 2px 0 0;\n  font-family: lato, sans-serif;\n  background-color: #323232;\n  color: #fff;\n  padding: ', ';\n  box-sizing: border-box;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _recompose = require('recompose');

var _ScreenSizeContext = require('../contexts/ScreenSizeContext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var rollUp = (0, _styledComponents.keyframes)(_templateObject);

var rollDown = (0, _styledComponents.keyframes)(_templateObject2);

var multilineRollUp = (0, _styledComponents.keyframes)(_templateObject3);

var multilineRollDown = (0, _styledComponents.keyframes)(_templateObject4);

var Message = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.mobile ? '32px' : '16px';
}, function (props) {
  return props.mobile && 'font-weight: 200';
}, function (props) {
  return !props.mobile && 'text-transform: uppercase';
});

var SnackbarWrapper = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.animation ? props.animation + ' .3s linear' : 0;
}, function (props) {
  if (props.open && !props.animateOut) {
    return '0px';
  }
  return props.mobile && props.multiline ? '-80px' : '-48px';
});

var SnackbarComponent = function (_PureComponent) {
  _inherits(SnackbarComponent, _PureComponent);

  function SnackbarComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, SnackbarComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      animateOut: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SnackbarComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (nextProps.open && !this.props.open) {
      if (this.delayedCloseTimer) {
        clearTimeout(this.delayedCloseTimer);
        this.delayedCloseTimer = null;
      }

      this.delayedCloseTimer = setTimeout(function () {
        // start auto-dismissal counter after snackbar is opened
        _this2.setState({ animateOut: true });
        // run onRequestClose, delayed by animation timing
        setTimeout(_this2.props.onRequestClose, 300);
      }, this.props.autoHideDuration || 4000);
    } else {
      this.setState({ animateOut: false });
    }
  };

  SnackbarComponent.prototype.render = function render() {
    var animation = null;
    if (this.props.open && !this.state.animateOut) {
      animation = this.props.mobile && this.props.multiline ? multilineRollUp : rollUp;
    } else if (this.state.animateOut) {
      animation = this.props.mobile && this.props.multiline ? multilineRollDown : rollDown;
    }
    return _react2.default.createElement(
      SnackbarWrapper,
      {
        className: this.props.className + ' smc-snackbar-container',
        open: this.props.open,
        animation: animation,
        mobile: this.props.mobile
      },
      _react2.default.createElement(
        Message,
        { className: 'smc-snackbar-message', mobile: this.props.mobile },
        this.props.message || this.props.children
      )
    );
  };

  return SnackbarComponent;
}(_react.PureComponent);

var Snackbar = (0, _styledComponents2.default)(SnackbarComponent).attrs({
  mobile: function mobile(_ref) {
    var screenSizeState = _ref.screenSizeState;
    return ['xs', 'sm'].includes(screenSizeState.screenSize);
  }
})(_templateObject7, function (props) {
  return props.open && !props.animateOut ? 'flex' : 'none';
}, function (props) {
  return props.mobile ? 0 : '50%';
}, function (props) {
  return !props.mobile && 'translateX(-50%)';
}, function (_ref2) {
  var mobile = _ref2.mobile,
      multiline = _ref2.multiline;
  return mobile && multiline ? '80px' : '48px';
}, function (props) {
  return props.mobile ? '100%' : '288px';
}, function (props) {
  return !props.mobile && '568px';
}, function (props) {
  return props.mobile && props.multiline ? '24px' : '14px 24px';
});

var enhancer = (0, _recompose.compose)(_ScreenSizeContext.withScreenSize);

exports.default = enhancer(Snackbar);
module.exports = exports['default'];