'use strict';

exports.__esModule = true;
exports.LineWeightIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LineWeightPath = function LineWeightPath() {
  return [_react2.default.createElement('path', { d: 'M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z', key: 'path0' })];
};

var LineWeightIcon = _icons.Icon.extend.attrs({
  children: LineWeightPath
})(_templateObject);

exports.default = LineWeightPath;
exports.LineWeightIcon = LineWeightIcon;