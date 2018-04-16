'use strict';

exports.__esModule = true;
exports.BluetoothConnectedIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BluetoothConnectedPath = function BluetoothConnectedPath() {
  return [_react2.default.createElement('path', { d: 'M7 12l-2-2-2 2 2 2 2-2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88zM19 10l-2 2 2 2 2-2-2-2z', key: 'path0' })];
};

var BluetoothConnectedIcon = _icons.Icon.extend.attrs({
  children: BluetoothConnectedPath
})(_templateObject);

exports.default = BluetoothConnectedPath;
exports.BluetoothConnectedIcon = BluetoothConnectedIcon;