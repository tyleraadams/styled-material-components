'use strict';

exports.__esModule = true;
exports.CropSquareIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CropSquarePath = function CropSquarePath() {
  return [_react2.default.createElement('path', { d: 'M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z', key: 'path0' })];
};

var CropSquareIcon = _icons.Icon.extend.attrs({
  children: CropSquarePath
})(_templateObject);

exports.default = CropSquarePath;
exports.CropSquareIcon = CropSquareIcon;