'use strict';

exports.__esModule = true;
exports.CallMergeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CallMergePath = function CallMergePath() {
  return [_react2.default.createElement('path', { d: 'M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z', key: 'path0' })];
};

var CallMergeIcon = _icons.Icon.extend.attrs({
  children: CallMergePath
})(_templateObject);

exports.default = CallMergePath;
exports.CallMergeIcon = CallMergeIcon;