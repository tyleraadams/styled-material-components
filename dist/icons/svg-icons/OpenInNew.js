'use strict';

exports.__esModule = true;
exports.OpenInNewIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var OpenInNewPath = function OpenInNewPath() {
  return [_react2.default.createElement('path', { d: 'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z', key: 'path0' })];
};

var OpenInNewIcon = _icons.Icon.extend.attrs({
  children: OpenInNewPath
})(_templateObject);

exports.default = OpenInNewPath;
exports.OpenInNewIcon = OpenInNewIcon;