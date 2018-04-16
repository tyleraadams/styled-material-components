'use strict';

exports.__esModule = true;
exports.TrendingFlatIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TrendingFlatPath = function TrendingFlatPath() {
  return [_react2.default.createElement('path', { d: 'M22 12l-4-4v3H3v2h15v3z', key: 'path0' })];
};

var TrendingFlatIcon = _icons.Icon.extend.attrs({
  children: TrendingFlatPath
})(_templateObject);

exports.default = TrendingFlatPath;
exports.TrendingFlatIcon = TrendingFlatIcon;