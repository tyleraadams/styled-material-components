'use strict';

exports.__esModule = true;
exports.ViewQuiltIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewQuiltPath = function ViewQuiltPath() {
  return [_react2.default.createElement('path', { d: 'M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z', key: 'path0' })];
};

var ViewQuiltIcon = _icons.Icon.extend.attrs({
  children: ViewQuiltPath
})(_templateObject);

exports.default = ViewQuiltPath;
exports.ViewQuiltIcon = ViewQuiltIcon;