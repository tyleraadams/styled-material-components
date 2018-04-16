'use strict';

exports.__esModule = true;
exports.TabletAndroidIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TabletAndroidPath = function TabletAndroidPath() {
  return [_react2.default.createElement('path', { d: 'M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z', key: 'path0' })];
};

var TabletAndroidIcon = _icons.Icon.extend.attrs({
  children: TabletAndroidPath
})(_templateObject);

exports.default = TabletAndroidPath;
exports.TabletAndroidIcon = TabletAndroidIcon;