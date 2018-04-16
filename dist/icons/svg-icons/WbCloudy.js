'use strict';

exports.__esModule = true;
exports.WbCloudyIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var WbCloudyPath = function WbCloudyPath() {
  return [_react2.default.createElement('path', { d: 'M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z', key: 'path0' })];
};

var WbCloudyIcon = _icons.Icon.extend.attrs({
  children: WbCloudyPath
})(_templateObject);

exports.default = WbCloudyPath;
exports.WbCloudyIcon = WbCloudyIcon;