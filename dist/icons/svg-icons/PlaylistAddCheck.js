'use strict';

exports.__esModule = true;
exports.PlaylistAddCheckIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PlaylistAddCheckPath = function PlaylistAddCheckPath() {
  return [_react2.default.createElement('path', { d: 'M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z', key: 'path0' })];
};

var PlaylistAddCheckIcon = _icons.Icon.extend.attrs({
  children: PlaylistAddCheckPath
})(_templateObject);

exports.default = PlaylistAddCheckPath;
exports.PlaylistAddCheckIcon = PlaylistAddCheckIcon;