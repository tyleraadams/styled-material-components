'use strict';

exports.__esModule = true;
exports.ViewModuleIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewModulePath = function ViewModulePath() {
  return [_react2.default.createElement('path', { d: 'M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z', key: 'path0' })];
};

var ViewModuleIcon = _icons.Icon.extend.attrs({
  children: ViewModulePath
})(_templateObject);

exports.default = ViewModulePath;
exports.ViewModuleIcon = ViewModuleIcon;