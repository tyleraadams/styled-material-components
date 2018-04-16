'use strict';

exports.__esModule = true;
exports.LocalPrintshopIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LocalPrintshopPath = function LocalPrintshopPath() {
  return [_react2.default.createElement('path', { d: 'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z', key: 'path0' })];
};

var LocalPrintshopIcon = _icons.Icon.extend.attrs({
  children: LocalPrintshopPath
})(_templateObject);

exports.default = LocalPrintshopPath;
exports.LocalPrintshopIcon = LocalPrintshopIcon;