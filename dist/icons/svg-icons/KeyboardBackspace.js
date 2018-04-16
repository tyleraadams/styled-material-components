'use strict';

exports.__esModule = true;
exports.KeyboardBackspaceIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var KeyboardBackspacePath = function KeyboardBackspacePath() {
  return [_react2.default.createElement('path', { d: 'M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z', key: 'path0' })];
};

var KeyboardBackspaceIcon = _icons.Icon.extend.attrs({
  children: KeyboardBackspacePath
})(_templateObject);

exports.default = KeyboardBackspacePath;
exports.KeyboardBackspaceIcon = KeyboardBackspaceIcon;