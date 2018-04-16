'use strict';

exports.__esModule = true;
exports.CallToActionIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CallToActionPath = function CallToActionPath() {
  return [_react2.default.createElement('path', { d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z', key: 'path0' })];
};

var CallToActionIcon = _icons.Icon.extend.attrs({
  children: CallToActionPath
})(_templateObject);

exports.default = CallToActionPath;
exports.CallToActionIcon = CallToActionIcon;