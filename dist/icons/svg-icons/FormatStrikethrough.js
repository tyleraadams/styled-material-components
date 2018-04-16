'use strict';

exports.__esModule = true;
exports.FormatStrikethroughIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatStrikethroughPath = function FormatStrikethroughPath() {
  return [_react2.default.createElement('path', { d: 'M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z', key: 'path0' })];
};

var FormatStrikethroughIcon = _icons.Icon.extend.attrs({
  children: FormatStrikethroughPath
})(_templateObject);

exports.default = FormatStrikethroughPath;
exports.FormatStrikethroughIcon = FormatStrikethroughIcon;