'use strict';

exports.__esModule = true;
exports.CallMissedIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CallMissedPath = function CallMissedPath() {
  return [_react2.default.createElement('path', { d: 'M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z', key: 'path0' })];
};

var CallMissedIcon = _icons.Icon.extend.attrs({
  children: CallMissedPath
})(_templateObject);

exports.default = CallMissedPath;
exports.CallMissedIcon = CallMissedIcon;