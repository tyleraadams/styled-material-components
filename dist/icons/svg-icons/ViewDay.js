'use strict';

exports.__esModule = true;
exports.ViewDayIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewDayPath = function ViewDayPath() {
  return [_react2.default.createElement('path', { d: 'M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z', key: 'path0' })];
};

var ViewDayIcon = _icons.Icon.extend.attrs({
  children: ViewDayPath
})(_templateObject);

exports.default = ViewDayPath;
exports.ViewDayIcon = ViewDayIcon;