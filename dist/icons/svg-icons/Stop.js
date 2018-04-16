'use strict';

exports.__esModule = true;
exports.StopIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StopPath = function StopPath() {
  return [_react2.default.createElement('path', { d: 'M6 6h12v12H6z', key: 'path0' })];
};

var StopIcon = _icons.Icon.extend.attrs({
  children: StopPath
})(_templateObject);

exports.default = StopPath;
exports.StopIcon = StopIcon;