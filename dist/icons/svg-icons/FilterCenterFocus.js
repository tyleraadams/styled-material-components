'use strict';

exports.__esModule = true;
exports.FilterCenterFocusIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FilterCenterFocusPath = function FilterCenterFocusPath() {
  return [_react2.default.createElement('path', { d: 'M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z', key: 'path0' })];
};

var FilterCenterFocusIcon = _icons.Icon.extend.attrs({
  children: FilterCenterFocusPath
})(_templateObject);

exports.default = FilterCenterFocusPath;
exports.FilterCenterFocusIcon = FilterCenterFocusIcon;