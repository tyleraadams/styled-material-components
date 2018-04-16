'use strict';

exports.__esModule = true;
exports.ViewStreamIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewStreamPath = function ViewStreamPath() {
  return [_react2.default.createElement('path', { d: 'M4 18h17v-6H4v6zM4 5v6h17V5H4z', key: 'path0' })];
};

var ViewStreamIcon = _icons.Icon.extend.attrs({
  children: ViewStreamPath
})(_templateObject);

exports.default = ViewStreamPath;
exports.ViewStreamIcon = ViewStreamIcon;