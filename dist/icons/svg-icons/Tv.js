'use strict';

exports.__esModule = true;
exports.TvIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TvPath = function TvPath() {
  return [_react2.default.createElement('path', { d: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z', key: 'path0' })];
};

var TvIcon = _icons.Icon.extend.attrs({
  children: TvPath
})(_templateObject);

exports.default = TvPath;
exports.TvIcon = TvIcon;