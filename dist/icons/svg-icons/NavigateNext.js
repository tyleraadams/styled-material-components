'use strict';

exports.__esModule = true;
exports.NavigateNextIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var NavigateNextPath = function NavigateNextPath() {
  return [_react2.default.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z', key: 'path0' })];
};

var NavigateNextIcon = _icons.Icon.extend.attrs({
  children: NavigateNextPath
})(_templateObject);

exports.default = NavigateNextPath;
exports.NavigateNextIcon = NavigateNextIcon;