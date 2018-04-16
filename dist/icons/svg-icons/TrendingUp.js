'use strict';

exports.__esModule = true;
exports.TrendingUpIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TrendingUpPath = function TrendingUpPath() {
  return [_react2.default.createElement('path', { d: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z', key: 'path0' })];
};

var TrendingUpIcon = _icons.Icon.extend.attrs({
  children: TrendingUpPath
})(_templateObject);

exports.default = TrendingUpPath;
exports.TrendingUpIcon = TrendingUpIcon;