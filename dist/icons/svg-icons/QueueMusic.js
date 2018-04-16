'use strict';

exports.__esModule = true;
exports.QueueMusicIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var QueueMusicPath = function QueueMusicPath() {
  return [_react2.default.createElement('path', { d: 'M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z', key: 'path0' })];
};

var QueueMusicIcon = _icons.Icon.extend.attrs({
  children: QueueMusicPath
})(_templateObject);

exports.default = QueueMusicPath;
exports.QueueMusicIcon = QueueMusicIcon;