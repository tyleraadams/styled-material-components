'use strict';

exports.__esModule = true;
exports.CropPortraitIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CropPortraitPath = function CropPortraitPath() {
  return [_react2.default.createElement('path', { d: 'M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z', key: 'path0' })];
};

var CropPortraitIcon = _icons.Icon.extend.attrs({
  children: CropPortraitPath
})(_templateObject);

exports.default = CropPortraitPath;
exports.CropPortraitIcon = CropPortraitIcon;