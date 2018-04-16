'use strict';

exports.__esModule = true;
exports.ArtTrackIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ArtTrackPath = function ArtTrackPath() {
  return [_react2.default.createElement('path', { d: 'M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z', key: 'path0' })];
};

var ArtTrackIcon = _icons.Icon.extend.attrs({
  children: ArtTrackPath
})(_templateObject);

exports.default = ArtTrackPath;
exports.ArtTrackIcon = ArtTrackIcon;