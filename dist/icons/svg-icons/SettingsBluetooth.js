'use strict';

exports.__esModule = true;
exports.SettingsBluetoothIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SettingsBluetoothPath = function SettingsBluetoothPath() {
  return [_react2.default.createElement('path', { d: 'M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z', key: 'path0' })];
};

var SettingsBluetoothIcon = _icons.Icon.extend.attrs({
  children: SettingsBluetoothPath
})(_templateObject);

exports.default = SettingsBluetoothPath;
exports.SettingsBluetoothIcon = SettingsBluetoothIcon;