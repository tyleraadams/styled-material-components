'use strict';

exports.__esModule = true;
exports.LocalAirportIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LocalAirportPath = function LocalAirportPath() {
  return [_react2.default.createElement('path', { d: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z', key: 'path0' })];
};

var LocalAirportIcon = _icons.Icon.extend.attrs({
  children: LocalAirportPath
})(_templateObject);

exports.default = LocalAirportPath;
exports.LocalAirportIcon = LocalAirportIcon;