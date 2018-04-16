'use strict';

exports.__esModule = true;
exports.PhonelinkIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PhonelinkPath = function PhonelinkPath() {
  return [_react2.default.createElement('path', { d: 'M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z', key: 'path0' })];
};

var PhonelinkIcon = _icons.Icon.extend.attrs({
  children: PhonelinkPath
})(_templateObject);

exports.default = PhonelinkPath;
exports.PhonelinkIcon = PhonelinkIcon;