'use strict';

exports.__esModule = true;
exports.ArrowDownwardIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ArrowDownwardPath = function ArrowDownwardPath() {
  return [_react2.default.createElement('path', { d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z', key: 'path0' })];
};

var ArrowDownwardIcon = _icons.Icon.extend.attrs({
  children: ArrowDownwardPath
})(_templateObject);

exports.default = ArrowDownwardPath;
exports.ArrowDownwardIcon = ArrowDownwardIcon;