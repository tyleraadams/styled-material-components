'use strict';

exports.__esModule = true;
exports.WarningIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var WarningPath = function WarningPath() {
  return [_react2.default.createElement('path', { d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z', key: 'path0' })];
};

var WarningIcon = _icons.Icon.extend.attrs({
  children: WarningPath
})(_templateObject);

exports.default = WarningPath;
exports.WarningIcon = WarningIcon;