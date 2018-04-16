'use strict';

exports.__esModule = true;
exports.PresentToAllIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PresentToAllPath = function PresentToAllPath() {
  return [_react2.default.createElement('path', { d: 'M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z', key: 'path0' })];
};

var PresentToAllIcon = _icons.Icon.extend.attrs({
  children: PresentToAllPath
})(_templateObject);

exports.default = PresentToAllPath;
exports.PresentToAllIcon = PresentToAllIcon;