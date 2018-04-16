'use strict';

exports.__esModule = true;
exports.SettingsCellIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SettingsCellPath = function SettingsCellPath() {
  return [_react2.default.createElement('path', { d: 'M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z', key: 'path0' })];
};

var SettingsCellIcon = _icons.Icon.extend.attrs({
  children: SettingsCellPath
})(_templateObject);

exports.default = SettingsCellPath;
exports.SettingsCellIcon = SettingsCellIcon;