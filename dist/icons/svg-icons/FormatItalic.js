'use strict';

exports.__esModule = true;
exports.FormatItalicIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatItalicPath = function FormatItalicPath() {
  return [_react2.default.createElement('path', { d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z', key: 'path0' })];
};

var FormatItalicIcon = _icons.Icon.extend.attrs({
  children: FormatItalicPath
})(_templateObject);

exports.default = FormatItalicPath;
exports.FormatItalicIcon = FormatItalicIcon;