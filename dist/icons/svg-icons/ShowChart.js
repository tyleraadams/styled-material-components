'use strict';

exports.__esModule = true;
exports.ShowChartIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ShowChartPath = function ShowChartPath() {
  return [_react2.default.createElement('path', { d: 'M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z', key: 'path0' })];
};

var ShowChartIcon = _icons.Icon.extend.attrs({
  children: ShowChartPath
})(_templateObject);

exports.default = ShowChartPath;
exports.ShowChartIcon = ShowChartIcon;