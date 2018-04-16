'use strict';

exports.__esModule = true;
exports.LocalConvenienceStoreIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LocalConvenienceStorePath = function LocalConvenienceStorePath() {
  return [_react2.default.createElement('path', { d: 'M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z', key: 'path0' })];
};

var LocalConvenienceStoreIcon = _icons.Icon.extend.attrs({
  children: LocalConvenienceStorePath
})(_templateObject);

exports.default = LocalConvenienceStorePath;
exports.LocalConvenienceStoreIcon = LocalConvenienceStoreIcon;