'use strict';

exports.__esModule = true;
exports.GavelIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var GavelPath = function GavelPath() {
  return [_react2.default.createElement('path', { d: 'M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z', key: 'path0' })];
};

var GavelIcon = _icons.Icon.extend.attrs({
  children: GavelPath
})(_templateObject);

exports.default = GavelPath;
exports.GavelIcon = GavelIcon;