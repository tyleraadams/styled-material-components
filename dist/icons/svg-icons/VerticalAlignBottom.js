'use strict';

exports.__esModule = true;
exports.VerticalAlignBottomIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VerticalAlignBottomPath = function VerticalAlignBottomPath() {
  return [_react2.default.createElement('path', { d: 'M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z', key: 'path0' })];
};

var VerticalAlignBottomIcon = _icons.Icon.extend.attrs({
  children: VerticalAlignBottomPath
})(_templateObject);

exports.default = VerticalAlignBottomPath;
exports.VerticalAlignBottomIcon = VerticalAlignBottomIcon;