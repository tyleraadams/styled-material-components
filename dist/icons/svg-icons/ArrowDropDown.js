'use strict';

exports.__esModule = true;
exports.ArrowDropDownIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ArrowDropDownPath = function ArrowDropDownPath() {
  return [_react2.default.createElement('path', { d: 'M7 10l5 5 5-5z', key: 'path0' })];
};

var ArrowDropDownIcon = _icons.Icon.extend.attrs({
  children: ArrowDropDownPath
})(_templateObject);

exports.default = ArrowDropDownPath;
exports.ArrowDropDownIcon = ArrowDropDownIcon;