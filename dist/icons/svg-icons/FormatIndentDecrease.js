'use strict';

exports.__esModule = true;
exports.FormatIndentDecreaseIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatIndentDecreasePath = function FormatIndentDecreasePath() {
  return [_react2.default.createElement('path', { d: 'M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z', key: 'path0' })];
};

var FormatIndentDecreaseIcon = _icons.Icon.extend.attrs({
  children: FormatIndentDecreasePath
})(_templateObject);

exports.default = FormatIndentDecreasePath;
exports.FormatIndentDecreaseIcon = FormatIndentDecreaseIcon;