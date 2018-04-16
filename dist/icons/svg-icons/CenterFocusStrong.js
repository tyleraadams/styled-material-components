'use strict';

exports.__esModule = true;
exports.CenterFocusStrongIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CenterFocusStrongPath = function CenterFocusStrongPath() {
  return [_react2.default.createElement('path', { d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z', key: 'path0' })];
};

var CenterFocusStrongIcon = _icons.Icon.extend.attrs({
  children: CenterFocusStrongPath
})(_templateObject);

exports.default = CenterFocusStrongPath;
exports.CenterFocusStrongIcon = CenterFocusStrongIcon;