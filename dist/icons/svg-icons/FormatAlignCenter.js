'use strict';

exports.__esModule = true;
exports.FormatAlignCenterIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatAlignCenterPath = function FormatAlignCenterPath() {
  return [_react2.default.createElement('path', { d: 'M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z', key: 'path0' })];
};

var FormatAlignCenterIcon = _icons.Icon.extend.attrs({
  children: FormatAlignCenterPath
})(_templateObject);

exports.default = FormatAlignCenterPath;
exports.FormatAlignCenterIcon = FormatAlignCenterIcon;