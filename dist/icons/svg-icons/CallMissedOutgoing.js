'use strict';

exports.__esModule = true;
exports.CallMissedOutgoingIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CallMissedOutgoingPath = function CallMissedOutgoingPath() {
  return [_react2.default.createElement('path', { d: 'M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z', key: 'path0' })];
};

var CallMissedOutgoingIcon = _icons.Icon.extend.attrs({
  children: CallMissedOutgoingPath
})(_templateObject);

exports.default = CallMissedOutgoingPath;
exports.CallMissedOutgoingIcon = CallMissedOutgoingIcon;