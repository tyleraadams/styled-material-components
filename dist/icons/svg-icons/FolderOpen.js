'use strict';

exports.__esModule = true;
exports.FolderOpenIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FolderOpenPath = function FolderOpenPath() {
  return [_react2.default.createElement('path', { d: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z', key: 'path0' })];
};

var FolderOpenIcon = _icons.Icon.extend.attrs({
  children: FolderOpenPath
})(_templateObject);

exports.default = FolderOpenPath;
exports.FolderOpenIcon = FolderOpenIcon;