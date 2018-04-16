'use strict';

exports.__esModule = true;
exports.Brightness6Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Brightness6Path = function Brightness6Path() {
  return [_react2.default.createElement('path', { d: 'M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z', key: 'path0' })];
};

var Brightness6Icon = _icons.Icon.extend.attrs({
  children: Brightness6Path
})(_templateObject);

exports.default = Brightness6Path;
exports.Brightness6Icon = Brightness6Icon;