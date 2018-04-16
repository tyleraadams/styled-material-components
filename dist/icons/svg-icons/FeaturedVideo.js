'use strict';

exports.__esModule = true;
exports.FeaturedVideoIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FeaturedVideoPath = function FeaturedVideoPath() {
  return [_react2.default.createElement('path', { d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z', key: 'path0' })];
};

var FeaturedVideoIcon = _icons.Icon.extend.attrs({
  children: FeaturedVideoPath
})(_templateObject);

exports.default = FeaturedVideoPath;
exports.FeaturedVideoIcon = FeaturedVideoIcon;