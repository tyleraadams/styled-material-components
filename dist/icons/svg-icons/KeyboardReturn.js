'use strict';

exports.__esModule = true;
exports.KeyboardReturnIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var KeyboardReturnPath = function KeyboardReturnPath() {
  return [_react2.default.createElement('path', { d: 'M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z', key: 'path0' })];
};

var KeyboardReturnIcon = _icons.Icon.extend.attrs({
  children: KeyboardReturnPath
})(_templateObject);

exports.default = KeyboardReturnPath;
exports.KeyboardReturnIcon = KeyboardReturnIcon;