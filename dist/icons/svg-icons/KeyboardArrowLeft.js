'use strict';

exports.__esModule = true;
exports.KeyboardArrowLeftIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var KeyboardArrowLeftPath = function KeyboardArrowLeftPath() {
  return [_react2.default.createElement('path', { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z', key: 'path0' })];
};

var KeyboardArrowLeftIcon = _icons.Icon.extend.attrs({
  children: KeyboardArrowLeftPath
})(_templateObject);

exports.default = KeyboardArrowLeftPath;
exports.KeyboardArrowLeftIcon = KeyboardArrowLeftIcon;