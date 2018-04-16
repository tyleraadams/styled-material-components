'use strict';

exports.__esModule = true;
exports.FormatAlignLeftIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatAlignLeftPath = function FormatAlignLeftPath() {
  return [_react2.default.createElement('path', { d: 'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z', key: 'path0' })];
};

var FormatAlignLeftIcon = _icons.Icon.extend.attrs({
  children: FormatAlignLeftPath
})(_templateObject);

exports.default = FormatAlignLeftPath;
exports.FormatAlignLeftIcon = FormatAlignLeftIcon;