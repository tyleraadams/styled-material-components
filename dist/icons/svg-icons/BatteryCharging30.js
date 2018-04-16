'use strict';

exports.__esModule = true;
exports.BatteryCharging30Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BatteryCharging30Path = function BatteryCharging30Path() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z', key: 'path0' }), _react2.default.createElement('path', { d: 'M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z', key: 'path1' })];
};

var BatteryCharging30Icon = _icons.Icon.extend.attrs({
  children: BatteryCharging30Path
})(_templateObject);

exports.default = BatteryCharging30Path;
exports.BatteryCharging30Icon = BatteryCharging30Icon;