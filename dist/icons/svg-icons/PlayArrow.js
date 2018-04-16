'use strict';

exports.__esModule = true;
exports.PlayArrowIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PlayArrowPath = function PlayArrowPath() {
  return [_react2.default.createElement('path', { d: 'M8 5v14l11-7z', key: 'path0' })];
};

var PlayArrowIcon = _icons.Icon.extend.attrs({
  children: PlayArrowPath
})(_templateObject);

exports.default = PlayArrowPath;
exports.PlayArrowIcon = PlayArrowIcon;