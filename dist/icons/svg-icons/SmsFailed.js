'use strict';

exports.__esModule = true;
exports.SmsFailedIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SmsFailedPath = function SmsFailedPath() {
  return [_react2.default.createElement('path', { d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z', key: 'path0' })];
};

var SmsFailedIcon = _icons.Icon.extend.attrs({
  children: SmsFailedPath
})(_templateObject);

exports.default = SmsFailedPath;
exports.SmsFailedIcon = SmsFailedIcon;