'use strict';

exports.__esModule = true;
exports.TransformIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TransformPath = function TransformPath() {
  return [_react2.default.createElement('path', { d: 'M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z', key: 'path0' })];
};

var TransformIcon = _icons.Icon.extend.attrs({
  children: TransformPath
})(_templateObject);

exports.default = TransformPath;
exports.TransformIcon = TransformIcon;