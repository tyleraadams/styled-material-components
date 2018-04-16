'use strict';

exports.__esModule = true;
exports.MarkunreadMailboxIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MarkunreadMailboxPath = function MarkunreadMailboxPath() {
  return [_react2.default.createElement('path', { d: 'M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z', key: 'path0' })];
};

var MarkunreadMailboxIcon = _icons.Icon.extend.attrs({
  children: MarkunreadMailboxPath
})(_templateObject);

exports.default = MarkunreadMailboxPath;
exports.MarkunreadMailboxIcon = MarkunreadMailboxIcon;