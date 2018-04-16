'use strict';

exports.__esModule = true;
exports.LocalParkingIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LocalParkingPath = function LocalParkingPath() {
  return [_react2.default.createElement('path', { d: 'M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z', key: 'path0' })];
};

var LocalParkingIcon = _icons.Icon.extend.attrs({
  children: LocalParkingPath
})(_templateObject);

exports.default = LocalParkingPath;
exports.LocalParkingIcon = LocalParkingIcon;