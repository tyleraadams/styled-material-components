'use strict';

exports.__esModule = true;
exports.FormatAlignRightIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatAlignRightPath = function FormatAlignRightPath() {
  return [_react2.default.createElement('path', { d: 'M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z', key: 'path0' })];
};

var FormatAlignRightIcon = _icons.Icon.extend.attrs({
  children: FormatAlignRightPath
})(_templateObject);

exports.default = FormatAlignRightPath;
exports.FormatAlignRightIcon = FormatAlignRightIcon;