'use strict';

exports.__esModule = true;
exports.ArrowUpwardIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ArrowUpwardPath = function ArrowUpwardPath() {
  return [_react2.default.createElement('path', { d: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z', key: 'path0' })];
};

var ArrowUpwardIcon = _icons.Icon.extend.attrs({
  children: ArrowUpwardPath
})(_templateObject);

exports.default = ArrowUpwardPath;
exports.ArrowUpwardIcon = ArrowUpwardIcon;