'use strict';

exports.__esModule = true;
exports.SignalCellularConnectedNoInternet0BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellularConnectedNoInternet0BarPath = function SignalCellularConnectedNoInternet0BarPath() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z', key: 'path0' }), _react2.default.createElement('path', { d: 'M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z', key: 'path1' })];
};

var SignalCellularConnectedNoInternet0BarIcon = _icons.Icon.extend.attrs({
  children: SignalCellularConnectedNoInternet0BarPath
})(_templateObject);

exports.default = SignalCellularConnectedNoInternet0BarPath;
exports.SignalCellularConnectedNoInternet0BarIcon = SignalCellularConnectedNoInternet0BarIcon;