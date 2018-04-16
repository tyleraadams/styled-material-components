'use strict';

exports.__esModule = true;
exports.SwapHorizIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SwapHorizPath = function SwapHorizPath() {
  return [_react2.default.createElement('path', { d: 'M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z', key: 'path0' })];
};

var SwapHorizIcon = _icons.Icon.extend.attrs({
  children: SwapHorizPath
})(_templateObject);

exports.default = SwapHorizPath;
exports.SwapHorizIcon = SwapHorizIcon;