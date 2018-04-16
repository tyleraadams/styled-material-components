'use strict';

exports.__esModule = true;
exports.PlayForWorkIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PlayForWorkPath = function PlayForWorkPath() {
  return [_react2.default.createElement('path', { d: 'M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z', key: 'path0' })];
};

var PlayForWorkIcon = _icons.Icon.extend.attrs({
  children: PlayForWorkPath
})(_templateObject);

exports.default = PlayForWorkPath;
exports.PlayForWorkIcon = PlayForWorkIcon;