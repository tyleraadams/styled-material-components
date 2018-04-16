'use strict';

exports.__esModule = true;
exports.ImageAspectRatioIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ImageAspectRatioPath = function ImageAspectRatioPath() {
  return [_react2.default.createElement('path', { d: 'M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z', key: 'path0' })];
};

var ImageAspectRatioIcon = _icons.Icon.extend.attrs({
  children: ImageAspectRatioPath
})(_templateObject);

exports.default = ImageAspectRatioPath;
exports.ImageAspectRatioIcon = ImageAspectRatioIcon;