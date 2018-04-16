'use strict';

exports.__esModule = true;
exports.LastPageIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LastPagePath = function LastPagePath() {
  return [_react2.default.createElement('path', { d: 'M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z', key: 'path0' })];
};

var LastPageIcon = _icons.Icon.extend.attrs({
  children: LastPagePath
})(_templateObject);

exports.default = LastPagePath;
exports.LastPageIcon = LastPageIcon;