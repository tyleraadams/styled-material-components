'use strict';

exports.__esModule = true;
exports.BatteryCharging90Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BatteryCharging90Path = function BatteryCharging90Path() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z', key: 'path0' }), _react2.default.createElement('path', { d: 'M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z', key: 'path1' })];
};

var BatteryCharging90Icon = _icons.Icon.extend.attrs({
  children: BatteryCharging90Path
})(_templateObject);

exports.default = BatteryCharging90Path;
exports.BatteryCharging90Icon = BatteryCharging90Icon;