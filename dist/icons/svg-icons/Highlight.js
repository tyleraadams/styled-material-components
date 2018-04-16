'use strict';

exports.__esModule = true;
exports.HighlightIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var HighlightPath = function HighlightPath() {
  return [_react2.default.createElement('path', { d: 'M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z', key: 'path0' })];
};

var HighlightIcon = _icons.Icon.extend.attrs({
  children: HighlightPath
})(_templateObject);

exports.default = HighlightPath;
exports.HighlightIcon = HighlightIcon;