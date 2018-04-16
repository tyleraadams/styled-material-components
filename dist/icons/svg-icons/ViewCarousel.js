'use strict';

exports.__esModule = true;
exports.ViewCarouselIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewCarouselPath = function ViewCarouselPath() {
  return [_react2.default.createElement('path', { d: 'M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z', key: 'path0' })];
};

var ViewCarouselIcon = _icons.Icon.extend.attrs({
  children: ViewCarouselPath
})(_templateObject);

exports.default = ViewCarouselPath;
exports.ViewCarouselIcon = ViewCarouselIcon;