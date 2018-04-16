'use strict';

exports.__esModule = true;
exports.FormatIndentIncreaseIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatIndentIncreasePath = function FormatIndentIncreasePath() {
  return [_react2.default.createElement('path', { d: 'M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z', key: 'path0' })];
};

var FormatIndentIncreaseIcon = _icons.Icon.extend.attrs({
  children: FormatIndentIncreasePath
})(_templateObject);

exports.default = FormatIndentIncreasePath;
exports.FormatIndentIncreaseIcon = FormatIndentIncreaseIcon;