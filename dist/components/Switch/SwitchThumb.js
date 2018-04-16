'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  left: 20px;\n  background-color: #009688;'], ['\n  left: 20px;\n  background-color: #009688;']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  right: 20px;\n  background-color: #FAFAFA;\n'], ['\n  right: 20px;\n  background-color: #FAFAFA;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  left: 20px;\n  background-color: #80CBC4;\n'], ['\n  left: 20px;\n  background-color: #80CBC4;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  right: 20px;\n  background-color: #BDBDBD;\n'], ['\n  right: 20px;\n  background-color: #BDBDBD;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  background-color: #BDBDBD;\n'], ['\n  background-color: #BDBDBD;\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  background-color: #424242;\n'], ['\n  background-color: #424242;\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  ', ';\n  &:active {\n    ', ';\n  }\n'], ['\n  ', ';\n  &:active {\n    ', ';\n  }\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  position: absolute;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  \n  ', '\n'], ['\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  position: absolute;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  \n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _elevation = require('../../mixins/elevation');

var _elevation2 = _interopRequireDefault(_elevation);

var _ripple = require('../../mixins/ripple');

var _ripple2 = _interopRequireDefault(_ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchThumbComponent = function (_PureComponent) {
  _inherits(SwitchThumbComponent, _PureComponent);

  function SwitchThumbComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, SwitchThumbComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.acceptableProps = {
      onClick: _this.props.onClick,
      disabled: _this.props.disabled
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SwitchThumbComponent.prototype.render = function render() {
    return _react2.default.createElement('div', _extends({
      className: this.props.className + ' smc-switch'
    }, this.acceptableProps));
  };

  return SwitchThumbComponent;
}(_react.PureComponent);

var lightOn = (0, _styledComponents.css)(_templateObject);

var lightOff = (0, _styledComponents.css)(_templateObject2);

var darkOn = (0, _styledComponents.css)(_templateObject3);

var darkOff = (0, _styledComponents.css)(_templateObject4);

var lightDisabled = (0, _styledComponents.css)(_templateObject5);

var darkDisabled = (0, _styledComponents.css)(_templateObject6);

var raised = (0, _styledComponents.css)(_templateObject7, (0, _elevation2.default)(2), (0, _elevation2.default)(8));

var SwitchThumb = (0, _styledComponents2.default)(SwitchThumbComponent)(_templateObject8, (0, _ripple2.default)(), function (props) {
  return props.light && props.on && lightOn;
}, function (props) {
  return props.light && !props.on && lightOff;
}, function (props) {
  return props.dark && props.on && darkOn;
}, function (props) {
  return props.dark && !props.on && darkOff;
}, function (props) {
  return props.light && props.disabled && lightDisabled;
}, function (props) {
  return props.dark && props.disabled && darkDisabled;
}, function (props) {
  return props.raised && raised;
});

exports.default = SwitchThumb;
module.exports = exports['default'];