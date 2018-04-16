'use strict';

exports.__esModule = true;
exports.SignalCellularOffIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellularOffPath = function SignalCellularOffPath() {
  return [_react2.default.createElement('path', { d: 'M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z', key: 'path0' })];
};

var SignalCellularOffIcon = _icons.Icon.extend.attrs({
  children: SignalCellularOffPath
})(_templateObject);

exports.default = SignalCellularOffPath;
exports.SignalCellularOffIcon = SignalCellularOffIcon;