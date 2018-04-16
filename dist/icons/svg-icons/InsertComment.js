'use strict';

exports.__esModule = true;
exports.InsertCommentIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var InsertCommentPath = function InsertCommentPath() {
  return [_react2.default.createElement('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z', key: 'path0' })];
};

var InsertCommentIcon = _icons.Icon.extend.attrs({
  children: InsertCommentPath
})(_templateObject);

exports.default = InsertCommentPath;
exports.InsertCommentIcon = InsertCommentIcon;