'use strict';

exports.__esModule = true;
exports.ArrowDropUpIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ArrowDropUpPath = function ArrowDropUpPath() {
  return [_react2.default.createElement('path', { d: 'M7 14l5-5 5 5z', key: 'path0' })];
};

var ArrowDropUpIcon = _icons.Icon.extend.attrs({
  children: ArrowDropUpPath
})(_templateObject);

exports.default = ArrowDropUpPath;
exports.ArrowDropUpIcon = ArrowDropUpIcon;