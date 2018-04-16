'use strict';

exports.__esModule = true;
exports.FileDownloadIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FileDownloadPath = function FileDownloadPath() {
  return [_react2.default.createElement('path', { d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z', key: 'path0' })];
};

var FileDownloadIcon = _icons.Icon.extend.attrs({
  children: FileDownloadPath
})(_templateObject);

exports.default = FileDownloadPath;
exports.FileDownloadIcon = FileDownloadIcon;