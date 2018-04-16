'use strict';

exports.__esModule = true;
exports.DeviceHubIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DeviceHubPath = function DeviceHubPath() {
  return [_react2.default.createElement('path', { d: 'M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z', key: 'path0' })];
};

var DeviceHubIcon = _icons.Icon.extend.attrs({
  children: DeviceHubPath
})(_templateObject);

exports.default = DeviceHubPath;
exports.DeviceHubIcon = DeviceHubIcon;