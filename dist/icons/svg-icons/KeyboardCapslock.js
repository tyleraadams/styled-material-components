'use strict';

exports.__esModule = true;
exports.KeyboardCapslockIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var KeyboardCapslockPath = function KeyboardCapslockPath() {
  return [_react2.default.createElement('path', { d: 'M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z', key: 'path0' })];
};

var KeyboardCapslockIcon = _icons.Icon.extend.attrs({
  children: KeyboardCapslockPath
})(_templateObject);

exports.default = KeyboardCapslockPath;
exports.KeyboardCapslockIcon = KeyboardCapslockIcon;