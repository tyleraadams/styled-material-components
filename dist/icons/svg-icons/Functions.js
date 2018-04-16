'use strict';

exports.__esModule = true;
exports.FunctionsIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FunctionsPath = function FunctionsPath() {
  return [_react2.default.createElement('path', { d: 'M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z', key: 'path0' })];
};

var FunctionsIcon = _icons.Icon.extend.attrs({
  children: FunctionsPath
})(_templateObject);

exports.default = FunctionsPath;
exports.FunctionsIcon = FunctionsIcon;