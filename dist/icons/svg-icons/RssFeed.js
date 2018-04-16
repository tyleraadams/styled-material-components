'use strict';

exports.__esModule = true;
exports.RssFeedIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var RssFeedPath = function RssFeedPath() {
  return [_react2.default.createElement('path', { d: 'M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z', key: 'path0' })];
};

var RssFeedIcon = _icons.Icon.extend.attrs({
  children: RssFeedPath
})(_templateObject);

exports.default = RssFeedPath;
exports.RssFeedIcon = RssFeedIcon;