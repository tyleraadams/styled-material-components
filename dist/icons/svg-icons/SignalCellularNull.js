'use strict';

exports.__esModule = true;
exports.SignalCellularNullIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellularNullPath = function SignalCellularNullPath() {
  return [_react2.default.createElement('path', { d: 'M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z', key: 'path0' })];
};

var SignalCellularNullIcon = _icons.Icon.extend.attrs({
  children: SignalCellularNullPath
})(_templateObject);

exports.default = SignalCellularNullPath;
exports.SignalCellularNullIcon = SignalCellularNullIcon;