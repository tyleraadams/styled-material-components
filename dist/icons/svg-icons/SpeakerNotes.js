'use strict';

exports.__esModule = true;
exports.SpeakerNotesIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SpeakerNotesPath = function SpeakerNotesPath() {
  return [_react2.default.createElement('path', { d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z', key: 'path0' })];
};

var SpeakerNotesIcon = _icons.Icon.extend.attrs({
  children: SpeakerNotesPath
})(_templateObject);

exports.default = SpeakerNotesPath;
exports.SpeakerNotesIcon = SpeakerNotesIcon;