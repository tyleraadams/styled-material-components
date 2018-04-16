'use strict';

exports.__esModule = true;
exports.LocalCafeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LocalCafePath = function LocalCafePath() {
  return [_react2.default.createElement('path', { d: 'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z', key: 'path0' })];
};

var LocalCafeIcon = _icons.Icon.extend.attrs({
  children: LocalCafePath
})(_templateObject);

exports.default = LocalCafePath;
exports.LocalCafeIcon = LocalCafeIcon;