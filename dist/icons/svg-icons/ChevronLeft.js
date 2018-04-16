'use strict';

exports.__esModule = true;
exports.ChevronLeftIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ChevronLeftPath = function ChevronLeftPath() {
  return [_react2.default.createElement('path', { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z', key: 'path0' })];
};

var ChevronLeftIcon = _icons.Icon.extend.attrs({
  children: ChevronLeftPath
})(_templateObject);

exports.default = ChevronLeftPath;
exports.ChevronLeftIcon = ChevronLeftIcon;