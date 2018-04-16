'use strict';

exports.__esModule = true;
exports.SignalWifi1BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalWifi1BarPath = function SignalWifi1BarPath() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z', key: 'path0' }), _react2.default.createElement('path', { d: 'M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z', key: 'path1' })];
};

var SignalWifi1BarIcon = _icons.Icon.extend.attrs({
  children: SignalWifi1BarPath
})(_templateObject);

exports.default = SignalWifi1BarPath;
exports.SignalWifi1BarIcon = SignalWifi1BarIcon;