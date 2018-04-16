'use strict';

exports.__esModule = true;
exports.SwitchVideoIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SwitchVideoPath = function SwitchVideoPath() {
  return [_react2.default.createElement('path', { d: 'M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z', key: 'path0' })];
};

var SwitchVideoIcon = _icons.Icon.extend.attrs({
  children: SwitchVideoPath
})(_templateObject);

exports.default = SwitchVideoPath;
exports.SwitchVideoIcon = SwitchVideoIcon;