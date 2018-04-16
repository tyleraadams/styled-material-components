'use strict';

exports.__esModule = true;
exports.LaptopWindowsIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LaptopWindowsPath = function LaptopWindowsPath() {
  return [_react2.default.createElement('path', { d: 'M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z', key: 'path0' })];
};

var LaptopWindowsIcon = _icons.Icon.extend.attrs({
  children: LaptopWindowsPath
})(_templateObject);

exports.default = LaptopWindowsPath;
exports.LaptopWindowsIcon = LaptopWindowsIcon;