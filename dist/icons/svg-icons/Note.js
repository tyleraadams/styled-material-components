'use strict';

exports.__esModule = true;
exports.NoteIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var NotePath = function NotePath() {
  return [_react2.default.createElement('path', { d: 'M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z', key: 'path0' })];
};

var NoteIcon = _icons.Icon.extend.attrs({
  children: NotePath
})(_templateObject);

exports.default = NotePath;
exports.NoteIcon = NoteIcon;