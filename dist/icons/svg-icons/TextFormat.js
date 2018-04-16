'use strict';

exports.__esModule = true;
exports.TextFormatIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TextFormatPath = function TextFormatPath() {
  return [_react2.default.createElement('path', { d: 'M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z', key: 'path0' })];
};

var TextFormatIcon = _icons.Icon.extend.attrs({
  children: TextFormatPath
})(_templateObject);

exports.default = TextFormatPath;
exports.TextFormatIcon = TextFormatIcon;