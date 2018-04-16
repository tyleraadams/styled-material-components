'use strict';

exports.__esModule = true;
exports.DesktopMacIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DesktopMacPath = function DesktopMacPath() {
  return [_react2.default.createElement('path', { d: 'M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z', key: 'path0' })];
};

var DesktopMacIcon = _icons.Icon.extend.attrs({
  children: DesktopMacPath
})(_templateObject);

exports.default = DesktopMacPath;
exports.DesktopMacIcon = DesktopMacIcon;