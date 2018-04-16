'use strict';

exports.__esModule = true;
exports.OpenInBrowserIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var OpenInBrowserPath = function OpenInBrowserPath() {
  return [_react2.default.createElement('path', { d: 'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z', key: 'path0' })];
};

var OpenInBrowserIcon = _icons.Icon.extend.attrs({
  children: OpenInBrowserPath
})(_templateObject);

exports.default = OpenInBrowserPath;
exports.OpenInBrowserIcon = OpenInBrowserIcon;