'use strict';

exports.__esModule = true;
exports.PlusOneIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PlusOnePath = function PlusOnePath() {
  return [_react2.default.createElement('path', { d: 'M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z', key: 'path0' })];
};

var PlusOneIcon = _icons.Icon.extend.attrs({
  children: PlusOnePath
})(_templateObject);

exports.default = PlusOnePath;
exports.PlusOneIcon = PlusOneIcon;