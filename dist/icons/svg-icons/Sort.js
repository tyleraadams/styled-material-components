'use strict';

exports.__esModule = true;
exports.SortIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SortPath = function SortPath() {
  return [_react2.default.createElement('path', { d: 'M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z', key: 'path0' })];
};

var SortIcon = _icons.Icon.extend.attrs({
  children: SortPath
})(_templateObject);

exports.default = SortPath;
exports.SortIcon = SortIcon;