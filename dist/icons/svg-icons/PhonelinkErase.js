'use strict';

exports.__esModule = true;
exports.PhonelinkEraseIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PhonelinkErasePath = function PhonelinkErasePath() {
  return [_react2.default.createElement('path', { d: 'M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z', key: 'path0' })];
};

var PhonelinkEraseIcon = _icons.Icon.extend.attrs({
  children: PhonelinkErasePath
})(_templateObject);

exports.default = PhonelinkErasePath;
exports.PhonelinkEraseIcon = PhonelinkEraseIcon;