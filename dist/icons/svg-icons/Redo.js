'use strict';

exports.__esModule = true;
exports.RedoIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var RedoPath = function RedoPath() {
  return [_react2.default.createElement('path', { d: 'M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z', key: 'path0' })];
};

var RedoIcon = _icons.Icon.extend.attrs({
  children: RedoPath
})(_templateObject);

exports.default = RedoPath;
exports.RedoIcon = RedoIcon;