'use strict';

exports.__esModule = true;
exports.ShortTextIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ShortTextPath = function ShortTextPath() {
  return [_react2.default.createElement('path', { d: 'M4 9h16v2H4zm0 4h10v2H4z', key: 'path0' })];
};

var ShortTextIcon = _icons.Icon.extend.attrs({
  children: ShortTextPath
})(_templateObject);

exports.default = ShortTextPath;
exports.ShortTextIcon = ShortTextIcon;