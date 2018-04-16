'use strict';

exports.__esModule = true;
exports.LocalHotelIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LocalHotelPath = function LocalHotelPath() {
  return [_react2.default.createElement('path', { d: 'M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z', key: 'path0' })];
};

var LocalHotelIcon = _icons.Icon.extend.attrs({
  children: LocalHotelPath
})(_templateObject);

exports.default = LocalHotelPath;
exports.LocalHotelIcon = LocalHotelIcon;