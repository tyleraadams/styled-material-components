'use strict';

exports.__esModule = true;
exports.TitleIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TitlePath = function TitlePath() {
  return [_react2.default.createElement('path', { d: 'M5 4v3h5.5v12h3V7H19V4z', key: 'path0' })];
};

var TitleIcon = _icons.Icon.extend.attrs({
  children: TitlePath
})(_templateObject);

exports.default = TitlePath;
exports.TitleIcon = TitleIcon;