'use strict';

exports.__esModule = true;
exports.FullscreenIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FullscreenPath = function FullscreenPath() {
  return [_react2.default.createElement('path', { d: 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z', key: 'path0' })];
};

var FullscreenIcon = _icons.Icon.extend.attrs({
  children: FullscreenPath
})(_templateObject);

exports.default = FullscreenPath;
exports.FullscreenIcon = FullscreenIcon;