'use strict';

exports.__esModule = true;
exports.KeyboardTabIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var KeyboardTabPath = function KeyboardTabPath() {
  return [_react2.default.createElement('path', { d: 'M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z', key: 'path0' })];
};

var KeyboardTabIcon = _icons.Icon.extend.attrs({
  children: KeyboardTabPath
})(_templateObject);

exports.default = KeyboardTabPath;
exports.KeyboardTabIcon = KeyboardTabIcon;