'use strict';

exports.__esModule = true;
exports.TabletIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TabletPath = function TabletPath() {
  return [_react2.default.createElement('path', { d: 'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z', key: 'path0' })];
};

var TabletIcon = _icons.Icon.extend.attrs({
  children: TabletPath
})(_templateObject);

exports.default = TabletPath;
exports.TabletIcon = TabletIcon;