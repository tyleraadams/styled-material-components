'use strict';

exports.__esModule = true;
exports.PictureInPictureAltIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PictureInPictureAltPath = function PictureInPictureAltPath() {
  return [_react2.default.createElement('path', { d: 'M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z', key: 'path0' })];
};

var PictureInPictureAltIcon = _icons.Icon.extend.attrs({
  children: PictureInPictureAltPath
})(_templateObject);

exports.default = PictureInPictureAltPath;
exports.PictureInPictureAltIcon = PictureInPictureAltIcon;