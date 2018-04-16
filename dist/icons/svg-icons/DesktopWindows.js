'use strict';

exports.__esModule = true;
exports.DesktopWindowsIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DesktopWindowsPath = function DesktopWindowsPath() {
  return [_react2.default.createElement('path', { d: 'M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z', key: 'path0' })];
};

var DesktopWindowsIcon = _icons.Icon.extend.attrs({
  children: DesktopWindowsPath
})(_templateObject);

exports.default = DesktopWindowsPath;
exports.DesktopWindowsIcon = DesktopWindowsIcon;