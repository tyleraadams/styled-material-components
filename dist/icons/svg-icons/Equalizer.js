'use strict';

exports.__esModule = true;
exports.EqualizerIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var EqualizerPath = function EqualizerPath() {
  return [_react2.default.createElement('path', { d: 'M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z', key: 'path0' })];
};

var EqualizerIcon = _icons.Icon.extend.attrs({
  children: EqualizerPath
})(_templateObject);

exports.default = EqualizerPath;
exports.EqualizerIcon = EqualizerIcon;