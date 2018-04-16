'use strict';

exports.__esModule = true;
exports.FeaturedPlayListIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FeaturedPlayListPath = function FeaturedPlayListPath() {
  return [_react2.default.createElement('path', { d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z', key: 'path0' })];
};

var FeaturedPlayListIcon = _icons.Icon.extend.attrs({
  children: FeaturedPlayListPath
})(_templateObject);

exports.default = FeaturedPlayListPath;
exports.FeaturedPlayListIcon = FeaturedPlayListIcon;