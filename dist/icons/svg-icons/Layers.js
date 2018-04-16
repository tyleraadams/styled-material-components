'use strict';

exports.__esModule = true;
exports.LayersIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LayersPath = function LayersPath() {
  return [_react2.default.createElement('path', { d: 'M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z', key: 'path0' })];
};

var LayersIcon = _icons.Icon.extend.attrs({
  children: LayersPath
})(_templateObject);

exports.default = LayersPath;
exports.LayersIcon = LayersIcon;