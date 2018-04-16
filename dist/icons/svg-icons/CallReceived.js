'use strict';

exports.__esModule = true;
exports.CallReceivedIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CallReceivedPath = function CallReceivedPath() {
  return [_react2.default.createElement('path', { d: 'M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z', key: 'path0' })];
};

var CallReceivedIcon = _icons.Icon.extend.attrs({
  children: CallReceivedPath
})(_templateObject);

exports.default = CallReceivedPath;
exports.CallReceivedIcon = CallReceivedIcon;