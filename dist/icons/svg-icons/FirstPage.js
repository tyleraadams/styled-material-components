'use strict';

exports.__esModule = true;
exports.FirstPageIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FirstPagePath = function FirstPagePath() {
  return [_react2.default.createElement('path', { d: 'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z', key: 'path0' })];
};

var FirstPageIcon = _icons.Icon.extend.attrs({
  children: FirstPagePath
})(_templateObject);

exports.default = FirstPagePath;
exports.FirstPageIcon = FirstPageIcon;