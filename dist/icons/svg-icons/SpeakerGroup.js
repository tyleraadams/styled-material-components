'use strict';

exports.__esModule = true;
exports.SpeakerGroupIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SpeakerGroupPath = function SpeakerGroupPath() {
  return [_react2.default.createElement('path', { d: 'M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z', key: 'path0' }), _react2.default.createElement('path', { d: 'M6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z', key: 'path1' })];
};

var SpeakerGroupIcon = _icons.Icon.extend.attrs({
  children: SpeakerGroupPath
})(_templateObject);

exports.default = SpeakerGroupPath;
exports.SpeakerGroupIcon = SpeakerGroupIcon;