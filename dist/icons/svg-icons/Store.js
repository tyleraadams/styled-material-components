'use strict';

exports.__esModule = true;
exports.StoreIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StorePath = function StorePath() {
  return [_react2.default.createElement('path', { d: 'M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z', key: 'path0' })];
};

var StoreIcon = _icons.Icon.extend.attrs({
  children: StorePath
})(_templateObject);

exports.default = StorePath;
exports.StoreIcon = StoreIcon;