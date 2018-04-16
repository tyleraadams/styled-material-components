'use strict';

exports.__esModule = true;
exports.BorderAllIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BorderAllPath = function BorderAllPath() {
  return [_react2.default.createElement('path', { d: 'M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z', key: 'path0' })];
};

var BorderAllIcon = _icons.Icon.extend.attrs({
  children: BorderAllPath
})(_templateObject);

exports.default = BorderAllPath;
exports.BorderAllIcon = BorderAllIcon;