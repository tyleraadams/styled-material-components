'use strict';

exports.__esModule = true;
exports.SignalCellularConnectedNoInternet1BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellularConnectedNoInternet1BarPath = function SignalCellularConnectedNoInternet1BarPath() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z', key: 'path0' }), _react2.default.createElement('path', { d: 'M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z', key: 'path1' })];
};

var SignalCellularConnectedNoInternet1BarIcon = _icons.Icon.extend.attrs({
  children: SignalCellularConnectedNoInternet1BarPath
})(_templateObject);

exports.default = SignalCellularConnectedNoInternet1BarPath;
exports.SignalCellularConnectedNoInternet1BarIcon = SignalCellularConnectedNoInternet1BarIcon;