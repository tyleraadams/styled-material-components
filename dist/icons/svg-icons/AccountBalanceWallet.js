'use strict';

exports.__esModule = true;
exports.AccountBalanceWalletIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AccountBalanceWalletPath = function AccountBalanceWalletPath() {
  return [_react2.default.createElement('path', { d: 'M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z', key: 'path0' })];
};

var AccountBalanceWalletIcon = _icons.Icon.extend.attrs({
  children: AccountBalanceWalletPath
})(_templateObject);

exports.default = AccountBalanceWalletPath;
exports.AccountBalanceWalletIcon = AccountBalanceWalletIcon;