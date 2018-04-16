'use strict';

exports.__esModule = true;
exports.SwapVertIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SwapVertPath = function SwapVertPath() {
  return [_react2.default.createElement('path', { d: 'M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z', key: 'path0' })];
};

var SwapVertIcon = _icons.Icon.extend.attrs({
  children: SwapVertPath
})(_templateObject);

exports.default = SwapVertPath;
exports.SwapVertIcon = SwapVertIcon;