'use strict';

exports.__esModule = true;
exports.LabelIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LabelPath = function LabelPath() {
  return [_react2.default.createElement('path', { d: 'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z', key: 'path0' })];
};

var LabelIcon = _icons.Icon.extend.attrs({
  children: LabelPath
})(_templateObject);

exports.default = LabelPath;
exports.LabelIcon = LabelIcon;