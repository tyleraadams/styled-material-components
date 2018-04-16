'use strict';

exports.__esModule = true;
exports.ViewCompactIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewCompactPath = function ViewCompactPath() {
  return [_react2.default.createElement('path', { d: 'M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z', key: 'path0' })];
};

var ViewCompactIcon = _icons.Icon.extend.attrs({
  children: ViewCompactPath
})(_templateObject);

exports.default = ViewCompactPath;
exports.ViewCompactIcon = ViewCompactIcon;