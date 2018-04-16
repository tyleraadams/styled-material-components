'use strict';

exports.__esModule = true;
exports.Brightness2Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Brightness2Path = function Brightness2Path() {
  return [_react2.default.createElement('path', { d: 'M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z', key: 'path0' })];
};

var Brightness2Icon = _icons.Icon.extend.attrs({
  children: Brightness2Path
})(_templateObject);

exports.default = Brightness2Path;
exports.Brightness2Icon = Brightness2Icon;