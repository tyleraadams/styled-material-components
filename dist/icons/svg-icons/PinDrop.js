'use strict';

exports.__esModule = true;
exports.PinDropIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PinDropPath = function PinDropPath() {
  return [_react2.default.createElement('path', { d: 'M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z', key: 'path0' })];
};

var PinDropIcon = _icons.Icon.extend.attrs({
  children: PinDropPath
})(_templateObject);

exports.default = PinDropPath;
exports.PinDropIcon = PinDropIcon;