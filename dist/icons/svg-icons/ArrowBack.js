'use strict';

exports.__esModule = true;
exports.ArrowBackIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ArrowBackPath = function ArrowBackPath() {
  return [_react2.default.createElement('path', { d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z', key: 'path0' })];
};

var ArrowBackIcon = _icons.Icon.extend.attrs({
  children: ArrowBackPath
})(_templateObject);

exports.default = ArrowBackPath;
exports.ArrowBackIcon = ArrowBackIcon;