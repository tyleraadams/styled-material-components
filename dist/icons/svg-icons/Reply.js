'use strict';

exports.__esModule = true;
exports.ReplyIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ReplyPath = function ReplyPath() {
  return [_react2.default.createElement('path', { d: 'M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z', key: 'path0' })];
};

var ReplyIcon = _icons.Icon.extend.attrs({
  children: ReplyPath
})(_templateObject);

exports.default = ReplyPath;
exports.ReplyIcon = ReplyIcon;