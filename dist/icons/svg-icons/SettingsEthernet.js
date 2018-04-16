'use strict';

exports.__esModule = true;
exports.SettingsEthernetIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SettingsEthernetPath = function SettingsEthernetPath() {
  return [_react2.default.createElement('path', { d: 'M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z', key: 'path0' })];
};

var SettingsEthernetIcon = _icons.Icon.extend.attrs({
  children: SettingsEthernetPath
})(_templateObject);

exports.default = SettingsEthernetPath;
exports.SettingsEthernetIcon = SettingsEthernetIcon;