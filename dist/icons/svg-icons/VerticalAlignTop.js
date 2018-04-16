'use strict';

exports.__esModule = true;
exports.VerticalAlignTopIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VerticalAlignTopPath = function VerticalAlignTopPath() {
  return [_react2.default.createElement('path', { d: 'M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z', key: 'path0' })];
};

var VerticalAlignTopIcon = _icons.Icon.extend.attrs({
  children: VerticalAlignTopPath
})(_templateObject);

exports.default = VerticalAlignTopPath;
exports.VerticalAlignTopIcon = VerticalAlignTopIcon;