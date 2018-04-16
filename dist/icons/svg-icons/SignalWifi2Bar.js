'use strict';

exports.__esModule = true;
exports.SignalWifi2BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalWifi2BarPath = function SignalWifi2BarPath() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z', key: 'path0' }), _react2.default.createElement('path', { d: 'M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z', key: 'path1' })];
};

var SignalWifi2BarIcon = _icons.Icon.extend.attrs({
  children: SignalWifi2BarPath
})(_templateObject);

exports.default = SignalWifi2BarPath;
exports.SignalWifi2BarIcon = SignalWifi2BarIcon;