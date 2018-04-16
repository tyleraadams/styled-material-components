'use strict';

exports.__esModule = true;
exports.AccessibilityIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AccessibilityPath = function AccessibilityPath() {
  return [_react2.default.createElement('path', { d: 'M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z', key: 'path0' })];
};

var AccessibilityIcon = _icons.Icon.extend.attrs({
  children: AccessibilityPath
})(_templateObject);

exports.default = AccessibilityPath;
exports.AccessibilityIcon = AccessibilityIcon;