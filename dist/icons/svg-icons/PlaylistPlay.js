'use strict';

exports.__esModule = true;
exports.PlaylistPlayIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PlaylistPlayPath = function PlaylistPlayPath() {
  return [_react2.default.createElement('path', { d: 'M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z', key: 'path0' })];
};

var PlaylistPlayIcon = _icons.Icon.extend.attrs({
  children: PlaylistPlayPath
})(_templateObject);

exports.default = PlaylistPlayPath;
exports.PlaylistPlayIcon = PlaylistPlayIcon;