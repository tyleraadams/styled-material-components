'use strict';

exports.__esModule = true;
exports.ShopTwoIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ShopTwoPath = function ShopTwoPath() {
  return [_react2.default.createElement('path', { d: 'M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z', key: 'path0' })];
};

var ShopTwoIcon = _icons.Icon.extend.attrs({
  children: ShopTwoPath
})(_templateObject);

exports.default = ShopTwoPath;
exports.ShopTwoIcon = ShopTwoIcon;