'use strict';

exports.__esModule = true;
exports.SettingsOverscanIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SettingsOverscanPath = function SettingsOverscanPath() {
  return [_react2.default.createElement('path', { d: 'M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z', key: 'path0' })];
};

var SettingsOverscanIcon = _icons.Icon.extend.attrs({
  children: SettingsOverscanPath
})(_templateObject);

exports.default = SettingsOverscanPath;
exports.SettingsOverscanIcon = SettingsOverscanIcon;