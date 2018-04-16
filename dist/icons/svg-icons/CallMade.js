'use strict';

exports.__esModule = true;
exports.CallMadeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CallMadePath = function CallMadePath() {
  return [_react2.default.createElement('path', { d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z', key: 'path0' })];
};

var CallMadeIcon = _icons.Icon.extend.attrs({
  children: CallMadePath
})(_templateObject);

exports.default = CallMadePath;
exports.CallMadeIcon = CallMadeIcon;