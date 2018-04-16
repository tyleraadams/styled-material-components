'use strict';

exports.__esModule = true;
exports.SettingsInputHdmiIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SettingsInputHdmiPath = function SettingsInputHdmiPath() {
  return [_react2.default.createElement('path', { d: 'M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z', key: 'path0' })];
};

var SettingsInputHdmiIcon = _icons.Icon.extend.attrs({
  children: SettingsInputHdmiPath
})(_templateObject);

exports.default = SettingsInputHdmiPath;
exports.SettingsInputHdmiIcon = SettingsInputHdmiIcon;