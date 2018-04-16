'use strict';

exports.__esModule = true;
exports.DashboardIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DashboardPath = function DashboardPath() {
  return [_react2.default.createElement('path', { d: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z', key: 'path0' })];
};

var DashboardIcon = _icons.Icon.extend.attrs({
  children: DashboardPath
})(_templateObject);

exports.default = DashboardPath;
exports.DashboardIcon = DashboardIcon;