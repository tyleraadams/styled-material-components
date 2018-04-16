'use strict';

exports.__esModule = true;
exports.PhotoAlbumIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PhotoAlbumPath = function PhotoAlbumPath() {
  return [_react2.default.createElement('path', { d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z', key: 'path0' })];
};

var PhotoAlbumIcon = _icons.Icon.extend.attrs({
  children: PhotoAlbumPath
})(_templateObject);

exports.default = PhotoAlbumPath;
exports.PhotoAlbumIcon = PhotoAlbumIcon;