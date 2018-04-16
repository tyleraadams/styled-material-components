'use strict';

exports.__esModule = true;
exports.ExpandMoreIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ExpandMorePath = function ExpandMorePath() {
  return [_react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z', key: 'path0' })];
};

var ExpandMoreIcon = _icons.Icon.extend.attrs({
  children: ExpandMorePath
})(_templateObject);

exports.default = ExpandMorePath;
exports.ExpandMoreIcon = ExpandMoreIcon;