'use strict';

exports.__esModule = true;
exports.FullscreenExitIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FullscreenExitPath = function FullscreenExitPath() {
  return [_react2.default.createElement('path', { d: 'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z', key: 'path0' })];
};

var FullscreenExitIcon = _icons.Icon.extend.attrs({
  children: FullscreenExitPath
})(_templateObject);

exports.default = FullscreenExitPath;
exports.FullscreenExitIcon = FullscreenExitIcon;