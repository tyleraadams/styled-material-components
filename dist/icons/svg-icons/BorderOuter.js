'use strict';

exports.__esModule = true;
exports.BorderOuterIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BorderOuterPath = function BorderOuterPath() {
  return [_react2.default.createElement('path', { d: 'M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z', key: 'path0' })];
};

var BorderOuterIcon = _icons.Icon.extend.attrs({
  children: BorderOuterPath
})(_templateObject);

exports.default = BorderOuterPath;
exports.BorderOuterIcon = BorderOuterIcon;