'use strict';

exports.__esModule = true;
exports.FormatColorFillIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatColorFillPath = function FormatColorFillPath() {
  return [_react2.default.createElement('path', { d: 'M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z', key: 'path0' }), _react2.default.createElement('path', { fillOpacity: '.36', d: 'M0 20h24v4H0z', key: 'path1' })];
};

var FormatColorFillIcon = _icons.Icon.extend.attrs({
  children: FormatColorFillPath
})(_templateObject);

exports.default = FormatColorFillPath;
exports.FormatColorFillIcon = FormatColorFillIcon;