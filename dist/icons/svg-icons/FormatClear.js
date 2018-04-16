'use strict';

exports.__esModule = true;
exports.FormatClearIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatClearPath = function FormatClearPath() {
  return [_react2.default.createElement('path', { d: 'M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z', key: 'path0' })];
};

var FormatClearIcon = _icons.Icon.extend.attrs({
  children: FormatClearPath
})(_templateObject);

exports.default = FormatClearPath;
exports.FormatClearIcon = FormatClearIcon;