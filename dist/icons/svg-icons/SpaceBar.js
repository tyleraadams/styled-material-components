'use strict';

exports.__esModule = true;
exports.SpaceBarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SpaceBarPath = function SpaceBarPath() {
  return [_react2.default.createElement('path', { d: 'M18 9v4H6V9H4v6h16V9z', key: 'path0' })];
};

var SpaceBarIcon = _icons.Icon.extend.attrs({
  children: SpaceBarPath
})(_templateObject);

exports.default = SpaceBarPath;
exports.SpaceBarIcon = SpaceBarIcon;