'use strict';

exports.__esModule = true;
exports.PowerInputIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PowerInputPath = function PowerInputPath() {
  return [_react2.default.createElement('path', { d: 'M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z', key: 'path0' })];
};

var PowerInputIcon = _icons.Icon.extend.attrs({
  children: PowerInputPath
})(_templateObject);

exports.default = PowerInputPath;
exports.PowerInputIcon = PowerInputIcon;