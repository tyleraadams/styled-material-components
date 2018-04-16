'use strict';

exports.__esModule = true;
exports.EjectIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var EjectPath = function EjectPath() {
  return [_react2.default.createElement('path', { d: 'M5 17h14v2H5zm7-12L5.33 15h13.34z', key: 'path0' })];
};

var EjectIcon = _icons.Icon.extend.attrs({
  children: EjectPath
})(_templateObject);

exports.default = EjectPath;
exports.EjectIcon = EjectIcon;