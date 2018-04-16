'use strict';

exports.__esModule = true;
exports.CompareArrowsIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CompareArrowsPath = function CompareArrowsPath() {
  return [_react2.default.createElement('path', { d: 'M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z', key: 'path0' })];
};

var CompareArrowsIcon = _icons.Icon.extend.attrs({
  children: CompareArrowsPath
})(_templateObject);

exports.default = CompareArrowsPath;
exports.CompareArrowsIcon = CompareArrowsIcon;