'use strict';

exports.__esModule = true;
exports.RestaurantIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var RestaurantPath = function RestaurantPath() {
  return [_react2.default.createElement('path', { d: 'M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z', key: 'path0' })];
};

var RestaurantIcon = _icons.Icon.extend.attrs({
  children: RestaurantPath
})(_templateObject);

exports.default = RestaurantPath;
exports.RestaurantIcon = RestaurantIcon;