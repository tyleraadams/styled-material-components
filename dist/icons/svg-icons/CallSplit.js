'use strict';

exports.__esModule = true;
exports.CallSplitIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CallSplitPath = function CallSplitPath() {
  return [_react2.default.createElement('path', { d: 'M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z', key: 'path0' })];
};

var CallSplitIcon = _icons.Icon.extend.attrs({
  children: CallSplitPath
})(_templateObject);

exports.default = CallSplitPath;
exports.CallSplitIcon = CallSplitIcon;