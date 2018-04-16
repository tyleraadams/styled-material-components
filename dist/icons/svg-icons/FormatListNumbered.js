'use strict';

exports.__esModule = true;
exports.FormatListNumberedIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatListNumberedPath = function FormatListNumberedPath() {
  return [_react2.default.createElement('path', { d: 'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z', key: 'path0' })];
};

var FormatListNumberedIcon = _icons.Icon.extend.attrs({
  children: FormatListNumberedPath
})(_templateObject);

exports.default = FormatListNumberedPath;
exports.FormatListNumberedIcon = FormatListNumberedIcon;