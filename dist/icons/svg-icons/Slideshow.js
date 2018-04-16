'use strict';

exports.__esModule = true;
exports.SlideshowIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SlideshowPath = function SlideshowPath() {
  return [_react2.default.createElement('path', { d: 'M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z', key: 'path0' })];
};

var SlideshowIcon = _icons.Icon.extend.attrs({
  children: SlideshowPath
})(_templateObject);

exports.default = SlideshowPath;
exports.SlideshowIcon = SlideshowIcon;