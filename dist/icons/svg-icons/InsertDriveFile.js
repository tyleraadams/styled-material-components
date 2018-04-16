'use strict';

exports.__esModule = true;
exports.InsertDriveFileIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var InsertDriveFilePath = function InsertDriveFilePath() {
  return [_react2.default.createElement('path', { d: 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z', key: 'path0' })];
};

var InsertDriveFileIcon = _icons.Icon.extend.attrs({
  children: InsertDriveFilePath
})(_templateObject);

exports.default = InsertDriveFilePath;
exports.InsertDriveFileIcon = InsertDriveFileIcon;