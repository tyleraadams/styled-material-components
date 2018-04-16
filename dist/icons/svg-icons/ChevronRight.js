'use strict';

exports.__esModule = true;
exports.ChevronRightIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ChevronRightPath = function ChevronRightPath() {
  return [_react2.default.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z', key: 'path0' })];
};

var ChevronRightIcon = _icons.Icon.extend.attrs({
  children: ChevronRightPath
})(_templateObject);

exports.default = ChevronRightPath;
exports.ChevronRightIcon = ChevronRightIcon;