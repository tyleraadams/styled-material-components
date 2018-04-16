'use strict';

exports.__esModule = true;
exports.DetailsIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DetailsPath = function DetailsPath() {
  return [_react2.default.createElement('path', { d: 'M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z', key: 'path0' })];
};

var DetailsIcon = _icons.Icon.extend.attrs({
  children: DetailsPath
})(_templateObject);

exports.default = DetailsPath;
exports.DetailsIcon = DetailsIcon;