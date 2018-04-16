'use strict';

exports.__esModule = true;
exports.TocIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TocPath = function TocPath() {
  return [_react2.default.createElement('path', { d: 'M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z', key: 'path0' })];
};

var TocIcon = _icons.Icon.extend.attrs({
  children: TocPath
})(_templateObject);

exports.default = TocPath;
exports.TocIcon = TocIcon;