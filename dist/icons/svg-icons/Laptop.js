'use strict';

exports.__esModule = true;
exports.LaptopIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LaptopPath = function LaptopPath() {
  return [_react2.default.createElement('path', { d: 'M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z', key: 'path0' })];
};

var LaptopIcon = _icons.Icon.extend.attrs({
  children: LaptopPath
})(_templateObject);

exports.default = LaptopPath;
exports.LaptopIcon = LaptopIcon;