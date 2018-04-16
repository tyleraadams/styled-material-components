'use strict';

exports.__esModule = true;
exports.ClearAllIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ClearAllPath = function ClearAllPath() {
  return [_react2.default.createElement('path', { d: 'M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z', key: 'path0' })];
};

var ClearAllIcon = _icons.Icon.extend.attrs({
  children: ClearAllPath
})(_templateObject);

exports.default = ClearAllPath;
exports.ClearAllIcon = ClearAllIcon;