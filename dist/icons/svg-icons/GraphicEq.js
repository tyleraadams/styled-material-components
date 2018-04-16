'use strict';

exports.__esModule = true;
exports.GraphicEqIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var GraphicEqPath = function GraphicEqPath() {
  return [_react2.default.createElement('path', { d: 'M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z', key: 'path0' })];
};

var GraphicEqIcon = _icons.Icon.extend.attrs({
  children: GraphicEqPath
})(_templateObject);

exports.default = GraphicEqPath;
exports.GraphicEqIcon = GraphicEqIcon;