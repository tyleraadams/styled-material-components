'use strict';

exports.__esModule = true;
exports.ImportExportIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ImportExportPath = function ImportExportPath() {
  return [_react2.default.createElement('path', { d: 'M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z', key: 'path0' })];
};

var ImportExportIcon = _icons.Icon.extend.attrs({
  children: ImportExportPath
})(_templateObject);

exports.default = ImportExportPath;
exports.ImportExportIcon = ImportExportIcon;