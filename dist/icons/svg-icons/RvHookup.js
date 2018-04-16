'use strict';

exports.__esModule = true;
exports.RvHookupIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var RvHookupPath = function RvHookupPath() {
  return [_react2.default.createElement('path', { d: 'M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z', key: 'path0' })];
};

var RvHookupIcon = _icons.Icon.extend.attrs({
  children: RvHookupPath
})(_templateObject);

exports.default = RvHookupPath;
exports.RvHookupIcon = RvHookupIcon;