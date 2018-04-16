'use strict';

exports.__esModule = true;
exports.HourglassEmptyIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var HourglassEmptyPath = function HourglassEmptyPath() {
  return [_react2.default.createElement('path', { d: 'M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z', key: 'path0' })];
};

var HourglassEmptyIcon = _icons.Icon.extend.attrs({
  children: HourglassEmptyPath
})(_templateObject);

exports.default = HourglassEmptyPath;
exports.HourglassEmptyIcon = HourglassEmptyIcon;