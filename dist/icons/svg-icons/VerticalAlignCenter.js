'use strict';

exports.__esModule = true;
exports.VerticalAlignCenterIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VerticalAlignCenterPath = function VerticalAlignCenterPath() {
  return [_react2.default.createElement('path', { d: 'M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z', key: 'path0' })];
};

var VerticalAlignCenterIcon = _icons.Icon.extend.attrs({
  children: VerticalAlignCenterPath
})(_templateObject);

exports.default = VerticalAlignCenterPath;
exports.VerticalAlignCenterIcon = VerticalAlignCenterIcon;