'use strict';

exports.__esModule = true;
exports.FormatAlignJustifyIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatAlignJustifyPath = function FormatAlignJustifyPath() {
  return [_react2.default.createElement('path', { d: 'M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z', key: 'path0' })];
};

var FormatAlignJustifyIcon = _icons.Icon.extend.attrs({
  children: FormatAlignJustifyPath
})(_templateObject);

exports.default = FormatAlignJustifyPath;
exports.FormatAlignJustifyIcon = FormatAlignJustifyIcon;