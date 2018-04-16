'use strict';

exports.__esModule = true;
exports.BorderStyleIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BorderStylePath = function BorderStylePath() {
  return [_react2.default.createElement('path', { d: 'M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z', key: 'path0' })];
};

var BorderStyleIcon = _icons.Icon.extend.attrs({
  children: BorderStylePath
})(_templateObject);

exports.default = BorderStylePath;
exports.BorderStyleIcon = BorderStyleIcon;