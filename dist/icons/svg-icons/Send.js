'use strict';

exports.__esModule = true;
exports.SendIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SendPath = function SendPath() {
  return [_react2.default.createElement('path', { d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z', key: 'path0' })];
};

var SendIcon = _icons.Icon.extend.attrs({
  children: SendPath
})(_templateObject);

exports.default = SendPath;
exports.SendIcon = SendIcon;