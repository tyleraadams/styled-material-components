'use strict';

exports.__esModule = true;
exports.MusicNoteIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MusicNotePath = function MusicNotePath() {
  return [_react2.default.createElement('path', { d: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z', key: 'path0' })];
};

var MusicNoteIcon = _icons.Icon.extend.attrs({
  children: MusicNotePath
})(_templateObject);

exports.default = MusicNotePath;
exports.MusicNoteIcon = MusicNoteIcon;