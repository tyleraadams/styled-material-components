'use strict';

exports.__esModule = true;
exports.PlaylistAddIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PlaylistAddPath = function PlaylistAddPath() {
  return [_react2.default.createElement('path', { d: 'M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z', key: 'path0' })];
};

var PlaylistAddIcon = _icons.Icon.extend.attrs({
  children: PlaylistAddPath
})(_templateObject);

exports.default = PlaylistAddPath;
exports.PlaylistAddIcon = PlaylistAddIcon;