'use strict';

exports.__esModule = true;
exports.Brightness3Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Brightness3Path = function Brightness3Path() {
  return [_react2.default.createElement('path', { d: 'M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z', key: 'path0' })];
};

var Brightness3Icon = _icons.Icon.extend.attrs({
  children: Brightness3Path
})(_templateObject);

exports.default = Brightness3Path;
exports.Brightness3Icon = Brightness3Icon;