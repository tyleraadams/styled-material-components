'use strict';

exports.__esModule = true;
exports.PieChartIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PieChartPath = function PieChartPath() {
  return [_react2.default.createElement('path', { d: 'M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z', key: 'path0' })];
};

var PieChartIcon = _icons.Icon.extend.attrs({
  children: PieChartPath
})(_templateObject);

exports.default = PieChartPath;
exports.PieChartIcon = PieChartIcon;