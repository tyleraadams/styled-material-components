'use strict';

exports.__esModule = true;
exports.NatureIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var NaturePath = function NaturePath() {
  return [_react2.default.createElement('path', { d: 'M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z', key: 'path0' })];
};

var NatureIcon = _icons.Icon.extend.attrs({
  children: NaturePath
})(_templateObject);

exports.default = NaturePath;
exports.NatureIcon = NatureIcon;