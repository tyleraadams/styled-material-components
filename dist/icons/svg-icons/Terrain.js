'use strict';

exports.__esModule = true;
exports.TerrainIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TerrainPath = function TerrainPath() {
  return [_react2.default.createElement('path', { d: 'M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z', key: 'path0' })];
};

var TerrainIcon = _icons.Icon.extend.attrs({
  children: TerrainPath
})(_templateObject);

exports.default = TerrainPath;
exports.TerrainIcon = TerrainIcon;