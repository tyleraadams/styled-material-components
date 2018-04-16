'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  ', ';\n  &:active {\n    ', ';\n  }\n  ', '\n  ', '\n  ', '\n'], ['\n  ', ';\n  &:active {\n    ', ';\n  }\n  ', '\n  ', '\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  color: black;\n  display: inline-block;\n  position: relative;\n  min-width: 88px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 2px;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 36px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  vertical-align: middle;\n  user-select: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  ', '\n\n  &:active {\n    outline: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  color: black;\n  display: inline-block;\n  position: relative;\n  min-width: 88px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 2px;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 36px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  vertical-align: middle;\n  user-select: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  ', '\n\n  &:active {\n    outline: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _elevation = require('../mixins/elevation');

var _elevation2 = _interopRequireDefault(_elevation);

var _ripple = require('../mixins/ripple');

var _ripple2 = _interopRequireDefault(_ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var primary = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.primary;
});

var accent = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.accent;
});

var raised = (0, _styledComponents.css)(_templateObject2, (0, _elevation2.default)(2), (0, _elevation2.default)(8), function (props) {
  return props.accent && '\n    color: white;\n    background-color: ' + props.theme.accent + ';\n    &:before {\n      color: black;\n    }\n  ';
}, function (props) {
  return props.primary && '\n    color: white;\n    background-color: ' + props.theme.primary + ';\n    &:before {\n      color: black;\n    }\n  ';
}, function (props) {
  return props.disabled && '\n    ' + (0, _elevation2.default)(0) + ';\n    background-color: rgba(0, 0, 0, .12);\n    pointer-events: none;\n  ';
});

var Button = _styledComponents2.default.button.attrs({
  'data-smc': 'Button'
})(_templateObject3, _elevation.elevationTransition, (0, _ripple2.default)(), function (props) {
  return props.accent && accent;
}, function (props) {
  return props.primary && primary;
}, function (props) {
  return props.raised && raised;
}, function (props) {
  return props.compact && 'padding: 0 8px;';
}, function (props) {
  return props.disabled && '\n    color: rgba(0, 0, 0, .26);\n    cursor: default;\n    pointer-events: none;\n  ';
}, function (props) {
  return props.dense && '\n    height: 32px;\n    font-size: .8125rem;\n    line-height: 32px;\n  ';
});

exports.default = Button;
module.exports = exports['default'];