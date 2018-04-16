'use strict';

exports.__esModule = true;
exports.FlashOnIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FlashOnPath = function FlashOnPath() {
  return [_react2.default.createElement('path', { d: 'M7 2v11h3v9l7-12h-4l4-8z', key: 'path0' })];
};

var FlashOnIcon = _icons.Icon.extend.attrs({
  children: FlashOnPath
})(_templateObject);

exports.default = FlashOnPath;
exports.FlashOnIcon = FlashOnIcon;