'use strict';

exports.__esModule = true;
exports.LooksOneIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LooksOnePath = function LooksOnePath() {
  return [_react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z', key: 'path0' })];
};

var LooksOneIcon = _icons.Icon.extend.attrs({
  children: LooksOnePath
})(_templateObject);

exports.default = LooksOnePath;
exports.LooksOneIcon = LooksOneIcon;