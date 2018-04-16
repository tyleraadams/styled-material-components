'use strict';

exports.__esModule = true;
exports.PhoneAndroidIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PhoneAndroidPath = function PhoneAndroidPath() {
  return [_react2.default.createElement('path', { d: 'M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z', key: 'path0' })];
};

var PhoneAndroidIcon = _icons.Icon.extend.attrs({
  children: PhoneAndroidPath
})(_templateObject);

exports.default = PhoneAndroidPath;
exports.PhoneAndroidIcon = PhoneAndroidIcon;