'use strict';

exports.__esModule = true;
exports.DoneAllIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DoneAllPath = function DoneAllPath() {
  return [_react2.default.createElement('path', { d: 'M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z', key: 'path0' })];
};

var DoneAllIcon = _icons.Icon.extend.attrs({
  children: DoneAllPath
})(_templateObject);

exports.default = DoneAllPath;
exports.DoneAllIcon = DoneAllIcon;