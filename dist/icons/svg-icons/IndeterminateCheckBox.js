'use strict';

exports.__esModule = true;
exports.IndeterminateCheckBoxIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var IndeterminateCheckBoxPath = function IndeterminateCheckBoxPath() {
  return [_react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z', key: 'path0' })];
};

var IndeterminateCheckBoxIcon = _icons.Icon.extend.attrs({
  children: IndeterminateCheckBoxPath
})(_templateObject);

exports.default = IndeterminateCheckBoxPath;
exports.IndeterminateCheckBoxIcon = IndeterminateCheckBoxIcon;