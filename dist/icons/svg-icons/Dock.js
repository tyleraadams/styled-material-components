'use strict';

exports.__esModule = true;
exports.DockIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DockPath = function DockPath() {
  return [_react2.default.createElement('path', { d: 'M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z', key: 'path0' })];
};

var DockIcon = _icons.Icon.extend.attrs({
  children: DockPath
})(_templateObject);

exports.default = DockPath;
exports.DockIcon = DockIcon;