'use strict';

exports.__esModule = true;
exports.LocalBarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LocalBarPath = function LocalBarPath() {
  return [_react2.default.createElement('path', { d: 'M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z', key: 'path0' })];
};

var LocalBarIcon = _icons.Icon.extend.attrs({
  children: LocalBarPath
})(_templateObject);

exports.default = LocalBarPath;
exports.LocalBarIcon = LocalBarIcon;