'use strict';

exports.__esModule = true;
exports.CreateNewFolderIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CreateNewFolderPath = function CreateNewFolderPath() {
  return [_react2.default.createElement('path', { d: 'M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z', key: 'path0' })];
};

var CreateNewFolderIcon = _icons.Icon.extend.attrs({
  children: CreateNewFolderPath
})(_templateObject);

exports.default = CreateNewFolderPath;
exports.CreateNewFolderIcon = CreateNewFolderIcon;