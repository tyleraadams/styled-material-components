'use strict';

exports.__esModule = true;
exports.TrendingDownIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TrendingDownPath = function TrendingDownPath() {
  return [_react2.default.createElement('path', { d: 'M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z', key: 'path0' })];
};

var TrendingDownIcon = _icons.Icon.extend.attrs({
  children: TrendingDownPath
})(_templateObject);

exports.default = TrendingDownPath;
exports.TrendingDownIcon = TrendingDownIcon;