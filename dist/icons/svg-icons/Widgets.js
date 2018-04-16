'use strict';

exports.__esModule = true;
exports.WidgetsIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var WidgetsPath = function WidgetsPath() {
  return [_react2.default.createElement('path', { d: 'M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z', key: 'path0' })];
};

var WidgetsIcon = _icons.Icon.extend.attrs({
  children: WidgetsPath
})(_templateObject);

exports.default = WidgetsPath;
exports.WidgetsIcon = WidgetsIcon;