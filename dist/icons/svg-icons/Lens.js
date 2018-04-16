'use strict';

exports.__esModule = true;
exports.LensIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LensPath = function LensPath() {
  return [_react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', key: 'path0' })];
};

var LensIcon = _icons.Icon.extend.attrs({
  children: LensPath
})(_templateObject);

exports.default = LensPath;
exports.LensIcon = LensIcon;