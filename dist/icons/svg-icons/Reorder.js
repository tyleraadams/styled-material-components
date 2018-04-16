'use strict';

exports.__esModule = true;
exports.ReorderIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ReorderPath = function ReorderPath() {
  return [_react2.default.createElement('path', { d: 'M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z', key: 'path0' })];
};

var ReorderIcon = _icons.Icon.extend.attrs({
  children: ReorderPath
})(_templateObject);

exports.default = ReorderPath;
exports.ReorderIcon = ReorderIcon;