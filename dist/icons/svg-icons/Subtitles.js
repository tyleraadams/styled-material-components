'use strict';

exports.__esModule = true;
exports.SubtitlesIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SubtitlesPath = function SubtitlesPath() {
  return [_react2.default.createElement('path', { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z', key: 'path0' })];
};

var SubtitlesIcon = _icons.Icon.extend.attrs({
  children: SubtitlesPath
})(_templateObject);

exports.default = SubtitlesPath;
exports.SubtitlesIcon = SubtitlesIcon;