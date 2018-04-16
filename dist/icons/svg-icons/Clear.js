'use strict';

exports.__esModule = true;
exports.ClearIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ClearPath = function ClearPath() {
  return [_react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z', key: 'path0' })];
};

var ClearIcon = _icons.Icon.extend.attrs({
  children: ClearPath
})(_templateObject);

exports.default = ClearPath;
exports.ClearIcon = ClearIcon;