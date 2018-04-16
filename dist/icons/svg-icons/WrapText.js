'use strict';

exports.__esModule = true;
exports.WrapTextIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var WrapTextPath = function WrapTextPath() {
  return [_react2.default.createElement('path', { d: 'M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z', key: 'path0' })];
};

var WrapTextIcon = _icons.Icon.extend.attrs({
  children: WrapTextPath
})(_templateObject);

exports.default = WrapTextPath;
exports.WrapTextIcon = WrapTextIcon;