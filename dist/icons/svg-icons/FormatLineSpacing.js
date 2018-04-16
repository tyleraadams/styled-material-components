'use strict';

exports.__esModule = true;
exports.FormatLineSpacingIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatLineSpacingPath = function FormatLineSpacingPath() {
  return [_react2.default.createElement('path', { d: 'M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z', key: 'path0' })];
};

var FormatLineSpacingIcon = _icons.Icon.extend.attrs({
  children: FormatLineSpacingPath
})(_templateObject);

exports.default = FormatLineSpacingPath;
exports.FormatLineSpacingIcon = FormatLineSpacingIcon;