'use strict';

exports.__esModule = true;
exports.SignalCellularConnectedNoInternet4BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellularConnectedNoInternet4BarPath = function SignalCellularConnectedNoInternet4BarPath() {
  return [_react2.default.createElement('path', { d: 'M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z', key: 'path0' })];
};

var SignalCellularConnectedNoInternet4BarIcon = _icons.Icon.extend.attrs({
  children: SignalCellularConnectedNoInternet4BarPath
})(_templateObject);

exports.default = SignalCellularConnectedNoInternet4BarPath;
exports.SignalCellularConnectedNoInternet4BarIcon = SignalCellularConnectedNoInternet4BarIcon;