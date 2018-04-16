'use strict';

exports.__esModule = true;
exports.FormatTextdirectionLToRIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatTextdirectionLToRPath = function FormatTextdirectionLToRPath() {
  return [_react2.default.createElement('path', { d: 'M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z', key: 'path0' })];
};

var FormatTextdirectionLToRIcon = _icons.Icon.extend.attrs({
  children: FormatTextdirectionLToRPath
})(_templateObject);

exports.default = FormatTextdirectionLToRPath;
exports.FormatTextdirectionLToRIcon = FormatTextdirectionLToRIcon;