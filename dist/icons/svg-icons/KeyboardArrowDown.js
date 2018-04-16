'use strict';

exports.__esModule = true;
exports.KeyboardArrowDownIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var KeyboardArrowDownPath = function KeyboardArrowDownPath() {
  return [_react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z', key: 'path0' })];
};

var KeyboardArrowDownIcon = _icons.Icon.extend.attrs({
  children: KeyboardArrowDownPath
})(_templateObject);

exports.default = KeyboardArrowDownPath;
exports.KeyboardArrowDownIcon = KeyboardArrowDownIcon;