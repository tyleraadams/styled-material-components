'use strict';

exports.__esModule = true;
exports.HourglassFullIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var HourglassFullPath = function HourglassFullPath() {
  return [_react2.default.createElement('path', { d: 'M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z', key: 'path0' })];
};

var HourglassFullIcon = _icons.Icon.extend.attrs({
  children: HourglassFullPath
})(_templateObject);

exports.default = HourglassFullPath;
exports.HourglassFullIcon = HourglassFullIcon;