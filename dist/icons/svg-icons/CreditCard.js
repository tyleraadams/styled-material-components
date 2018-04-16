'use strict';

exports.__esModule = true;
exports.CreditCardIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CreditCardPath = function CreditCardPath() {
  return [_react2.default.createElement('path', { d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z', key: 'path0' })];
};

var CreditCardIcon = _icons.Icon.extend.attrs({
  children: CreditCardPath
})(_templateObject);

exports.default = CreditCardPath;
exports.CreditCardIcon = CreditCardIcon;