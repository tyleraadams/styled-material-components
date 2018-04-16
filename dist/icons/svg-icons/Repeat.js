'use strict';

exports.__esModule = true;
exports.RepeatIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var RepeatPath = function RepeatPath() {
  return [_react2.default.createElement('path', { d: 'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z', key: 'path0' })];
};

var RepeatIcon = _icons.Icon.extend.attrs({
  children: RepeatPath
})(_templateObject);

exports.default = RepeatPath;
exports.RepeatIcon = RepeatIcon;