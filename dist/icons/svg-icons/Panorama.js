'use strict';

exports.__esModule = true;
exports.PanoramaIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PanoramaPath = function PanoramaPath() {
  return [_react2.default.createElement('path', { d: 'M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z', key: 'path0' })];
};

var PanoramaIcon = _icons.Icon.extend.attrs({
  children: PanoramaPath
})(_templateObject);

exports.default = PanoramaPath;
exports.PanoramaIcon = PanoramaIcon;