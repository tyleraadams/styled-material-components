'use strict';

exports.__esModule = true;
exports.ChatBubbleOutlineIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ChatBubbleOutlinePath = function ChatBubbleOutlinePath() {
  return [_react2.default.createElement('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z', key: 'path0' })];
};

var ChatBubbleOutlineIcon = _icons.Icon.extend.attrs({
  children: ChatBubbleOutlinePath
})(_templateObject);

exports.default = ChatBubbleOutlinePath;
exports.ChatBubbleOutlineIcon = ChatBubbleOutlineIcon;