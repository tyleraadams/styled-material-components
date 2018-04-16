'use strict';

exports.__esModule = true;
exports.SwapCallsIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SwapCallsPath = function SwapCallsPath() {
  return [_react2.default.createElement('path', { d: 'M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z', key: 'path0' })];
};

var SwapCallsIcon = _icons.Icon.extend.attrs({
  children: SwapCallsPath
})(_templateObject);

exports.default = SwapCallsPath;
exports.SwapCallsIcon = SwapCallsIcon;