'use strict';

exports.__esModule = true;
exports.ChatBubbleIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ChatBubblePath = function ChatBubblePath() {
  return [_react2.default.createElement('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z', key: 'path0' })];
};

var ChatBubbleIcon = _icons.Icon.extend.attrs({
  children: ChatBubblePath
})(_templateObject);

exports.default = ChatBubblePath;
exports.ChatBubbleIcon = ChatBubbleIcon;