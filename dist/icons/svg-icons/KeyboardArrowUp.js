'use strict';

exports.__esModule = true;
exports.KeyboardArrowUpIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var KeyboardArrowUpPath = function KeyboardArrowUpPath() {
  return [_react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z', key: 'path0' })];
};

var KeyboardArrowUpIcon = _icons.Icon.extend.attrs({
  children: KeyboardArrowUpPath
})(_templateObject);

exports.default = KeyboardArrowUpPath;
exports.KeyboardArrowUpIcon = KeyboardArrowUpIcon;