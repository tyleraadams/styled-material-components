'use strict';

exports.__esModule = true;
exports.SignalWifi4BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalWifi4BarPath = function SignalWifi4BarPath() {
  return [_react2.default.createElement('path', { d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z', key: 'path0' })];
};

var SignalWifi4BarIcon = _icons.Icon.extend.attrs({
  children: SignalWifi4BarPath
})(_templateObject);

exports.default = SignalWifi4BarPath;
exports.SignalWifi4BarIcon = SignalWifi4BarIcon;