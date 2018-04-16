'use strict';

exports.__esModule = true;
exports.PictureInPictureIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PictureInPicturePath = function PictureInPicturePath() {
  return [_react2.default.createElement('path', { d: 'M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z', key: 'path0' })];
};

var PictureInPictureIcon = _icons.Icon.extend.attrs({
  children: PictureInPicturePath
})(_templateObject);

exports.default = PictureInPicturePath;
exports.PictureInPictureIcon = PictureInPictureIcon;