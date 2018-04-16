'use strict';

exports.__esModule = true;
exports.OndemandVideoIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var OndemandVideoPath = function OndemandVideoPath() {
  return [_react2.default.createElement('path', { d: 'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z', key: 'path0' })];
};

var OndemandVideoIcon = _icons.Icon.extend.attrs({
  children: OndemandVideoPath
})(_templateObject);

exports.default = OndemandVideoPath;
exports.OndemandVideoIcon = OndemandVideoIcon;