'use strict';

exports.__esModule = true;
exports.FileUploadIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FileUploadPath = function FileUploadPath() {
  return [_react2.default.createElement('path', { d: 'M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z', key: 'path0' })];
};

var FileUploadIcon = _icons.Icon.extend.attrs({
  children: FileUploadPath
})(_templateObject);

exports.default = FileUploadPath;
exports.FileUploadIcon = FileUploadIcon;