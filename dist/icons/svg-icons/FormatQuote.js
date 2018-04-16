'use strict';

exports.__esModule = true;
exports.FormatQuoteIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatQuotePath = function FormatQuotePath() {
  return [_react2.default.createElement('path', { d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z', key: 'path0' })];
};

var FormatQuoteIcon = _icons.Icon.extend.attrs({
  children: FormatQuotePath
})(_templateObject);

exports.default = FormatQuotePath;
exports.FormatQuoteIcon = FormatQuoteIcon;