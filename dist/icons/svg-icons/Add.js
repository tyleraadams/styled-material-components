'use strict';

exports.__esModule = true;
exports.AddIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AddPath = function AddPath() {
  return [_react2.default.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z', key: 'path0' })];
};

var AddIcon = _icons.Icon.extend.attrs({
  children: AddPath
})(_templateObject);

exports.default = AddPath;
exports.AddIcon = AddIcon;