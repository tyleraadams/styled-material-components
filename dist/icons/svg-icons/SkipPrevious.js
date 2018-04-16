'use strict';

exports.__esModule = true;
exports.SkipPreviousIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SkipPreviousPath = function SkipPreviousPath() {
  return [_react2.default.createElement('path', { d: 'M6 6h2v12H6zm3.5 6l8.5 6V6z', key: 'path0' })];
};

var SkipPreviousIcon = _icons.Icon.extend.attrs({
  children: SkipPreviousPath
})(_templateObject);

exports.default = SkipPreviousPath;
exports.SkipPreviousIcon = SkipPreviousIcon;