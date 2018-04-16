'use strict';

exports.__esModule = true;
exports.PhotoSizeSelectActualIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PhotoSizeSelectActualPath = function PhotoSizeSelectActualPath() {
  return [_react2.default.createElement('path', { d: 'M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z', key: 'path0' })];
};

var PhotoSizeSelectActualIcon = _icons.Icon.extend.attrs({
  children: PhotoSizeSelectActualPath
})(_templateObject);

exports.default = PhotoSizeSelectActualPath;
exports.PhotoSizeSelectActualIcon = PhotoSizeSelectActualIcon;