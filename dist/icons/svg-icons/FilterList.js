'use strict';

exports.__esModule = true;
exports.FilterListIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FilterListPath = function FilterListPath() {
  return [_react2.default.createElement('path', { d: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z', key: 'path0' })];
};

var FilterListIcon = _icons.Icon.extend.attrs({
  children: FilterListPath
})(_templateObject);

exports.default = FilterListPath;
exports.FilterListIcon = FilterListIcon;