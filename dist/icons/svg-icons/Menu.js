'use strict';

exports.__esModule = true;
exports.MenuIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MenuPath = function MenuPath() {
  return [_react2.default.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z', key: 'path0' })];
};

var MenuIcon = _icons.Icon.extend.attrs({
  children: MenuPath
})(_templateObject);

exports.default = MenuPath;
exports.MenuIcon = MenuIcon;