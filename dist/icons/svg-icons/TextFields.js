'use strict';

exports.__esModule = true;
exports.TextFieldsIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TextFieldsPath = function TextFieldsPath() {
  return [_react2.default.createElement('path', { d: 'M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z', key: 'path0' })];
};

var TextFieldsIcon = _icons.Icon.extend.attrs({
  children: TextFieldsPath
})(_templateObject);

exports.default = TextFieldsPath;
exports.TextFieldsIcon = TextFieldsIcon;