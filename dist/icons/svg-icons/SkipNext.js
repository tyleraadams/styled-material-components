'use strict';

exports.__esModule = true;
exports.SkipNextIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SkipNextPath = function SkipNextPath() {
  return [_react2.default.createElement('path', { d: 'M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z', key: 'path0' })];
};

var SkipNextIcon = _icons.Icon.extend.attrs({
  children: SkipNextPath
})(_templateObject);

exports.default = SkipNextPath;
exports.SkipNextIcon = SkipNextIcon;