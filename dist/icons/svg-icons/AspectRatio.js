'use strict';

exports.__esModule = true;
exports.AspectRatioIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AspectRatioPath = function AspectRatioPath() {
  return [_react2.default.createElement('path', { d: 'M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z', key: 'path0' })];
};

var AspectRatioIcon = _icons.Icon.extend.attrs({
  children: AspectRatioPath
})(_templateObject);

exports.default = AspectRatioPath;
exports.AspectRatioIcon = AspectRatioIcon;