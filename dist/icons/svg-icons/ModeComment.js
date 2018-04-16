'use strict';

exports.__esModule = true;
exports.ModeCommentIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ModeCommentPath = function ModeCommentPath() {
  return [_react2.default.createElement('path', { d: 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z', key: 'path0' })];
};

var ModeCommentIcon = _icons.Icon.extend.attrs({
  children: ModeCommentPath
})(_templateObject);

exports.default = ModeCommentPath;
exports.ModeCommentIcon = ModeCommentIcon;