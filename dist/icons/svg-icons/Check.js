'use strict';

exports.__esModule = true;
exports.CheckIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CheckPath = function CheckPath() {
  return [_react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z', key: 'path0' })];
};

var CheckIcon = _icons.Icon.extend.attrs({
  children: CheckPath
})(_templateObject);

exports.default = CheckPath;
exports.CheckIcon = CheckIcon;