'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', ';\n  &:active {\n    ', ';\n  }\n  color: #fff;\n    background-color: ', ';\n'], ['\n  ', ';\n  &:active {\n    ', ';\n  }\n  color: #fff;\n    background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  ', ';\n  &:active {\n    ', ';\n  }\n  background-color: rgba(0, 0, 0, .12);\n    pointer-events: none;\n'], ['\n  ', ';\n  &:active {\n    ', ';\n  }\n  background-color: rgba(0, 0, 0, .12);\n    pointer-events: none;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  height: 40px;\n  width: 40px;\n'], ['\n  height: 40px;\n  width: 40px;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  color: #fff;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  outline: none;\n  background: transparent;\n  overflow: hidden;\n  user-select: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  ', '\n\n  &:active {\n    outline: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n    overflow: hidden;\n  }\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  color: #fff;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  outline: none;\n  background: transparent;\n  overflow: hidden;\n  user-select: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  ', '\n\n  &:active {\n    outline: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n    overflow: hidden;\n  }\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _elevation = require('../mixins/elevation');

var _elevation2 = _interopRequireDefault(_elevation);

var _ripple = require('../mixins/ripple');

var _ripple2 = _interopRequireDefault(_ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var primary = (0, _styledComponents.css)(_templateObject, (0, _elevation2.default)(2), (0, _elevation2.default)(8), function (props) {
  return props.theme.primary;
});

var accent = (0, _styledComponents.css)(_templateObject, (0, _elevation2.default)(2), (0, _elevation2.default)(8), function (props) {
  return props.theme.accent;
});

var disabled = (0, _styledComponents.css)(_templateObject2, (0, _elevation2.default)(2), (0, _elevation2.default)(8));

var mini = (0, _styledComponents.css)(_templateObject3);

var FloatingActionButton = _styledComponents2.default.button.attrs({
  'data-smc': 'FloatingActionButton'
})(_templateObject4, _elevation.elevationTransition, (0, _ripple2.default)(), function (props) {
  return props.accent && accent;
}, function (props) {
  return props.primary && primary;
}, function (props) {
  return props.disabled && disabled;
}, function (props) {
  return props.mini && mini;
});

exports.default = FloatingActionButton;
module.exports = exports['default'];