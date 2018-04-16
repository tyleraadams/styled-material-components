'use strict';

exports.__esModule = true;
exports.KitchenIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var KitchenPath = function KitchenPath() {
  return [_react2.default.createElement('path', { d: 'M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z', key: 'path0' })];
};

var KitchenIcon = _icons.Icon.extend.attrs({
  children: KitchenPath
})(_templateObject);

exports.default = KitchenPath;
exports.KitchenIcon = KitchenIcon;