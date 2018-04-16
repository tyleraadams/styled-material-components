'use strict';

exports.__esModule = true;
exports.CropIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CropPath = function CropPath() {
  return [_react2.default.createElement('path', { d: 'M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z', key: 'path0' })];
};

var CropIcon = _icons.Icon.extend.attrs({
  children: CropPath
})(_templateObject);

exports.default = CropPath;
exports.CropIcon = CropIcon;