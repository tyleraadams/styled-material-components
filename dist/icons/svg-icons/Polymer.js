'use strict';

exports.__esModule = true;
exports.PolymerIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PolymerPath = function PolymerPath() {
  return [_react2.default.createElement('path', { d: 'M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z', key: 'path0' })];
};

var PolymerIcon = _icons.Icon.extend.attrs({
  children: PolymerPath
})(_templateObject);

exports.default = PolymerPath;
exports.PolymerIcon = PolymerIcon;