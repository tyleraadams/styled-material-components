'use strict';

exports.__esModule = true;
exports.VideocamIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VideocamPath = function VideocamPath() {
  return [_react2.default.createElement('path', { d: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z', key: 'path0' })];
};

var VideocamIcon = _icons.Icon.extend.attrs({
  children: VideocamPath
})(_templateObject);

exports.default = VideocamPath;
exports.VideocamIcon = VideocamIcon;