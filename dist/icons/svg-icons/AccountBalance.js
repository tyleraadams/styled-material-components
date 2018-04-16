'use strict';

exports.__esModule = true;
exports.AccountBalanceIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AccountBalancePath = function AccountBalancePath() {
  return [_react2.default.createElement('path', { d: 'M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z', key: 'path0' })];
};

var AccountBalanceIcon = _icons.Icon.extend.attrs({
  children: AccountBalancePath
})(_templateObject);

exports.default = AccountBalancePath;
exports.AccountBalanceIcon = AccountBalanceIcon;