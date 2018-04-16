'use strict';

exports.__esModule = true;
exports.SubscriptionsIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SubscriptionsPath = function SubscriptionsPath() {
  return [_react2.default.createElement('path', { d: 'M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z', key: 'path0' })];
};

var SubscriptionsIcon = _icons.Icon.extend.attrs({
  children: SubscriptionsPath
})(_templateObject);

exports.default = SubscriptionsPath;
exports.SubscriptionsIcon = SubscriptionsIcon;