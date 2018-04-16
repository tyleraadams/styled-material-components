'use strict';

exports.__esModule = true;
exports.FormatPaintIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatPaintPath = function FormatPaintPath() {
  return [_react2.default.createElement('path', { d: 'M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z', key: 'path0' })];
};

var FormatPaintIcon = _icons.Icon.extend.attrs({
  children: FormatPaintPath
})(_templateObject);

exports.default = FormatPaintPath;
exports.FormatPaintIcon = FormatPaintIcon;