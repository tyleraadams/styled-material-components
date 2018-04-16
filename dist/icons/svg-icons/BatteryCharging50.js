'use strict';

exports.__esModule = true;
exports.BatteryCharging50Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BatteryCharging50Path = function BatteryCharging50Path() {
  return [_react2.default.createElement('path', { d: 'M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z', key: 'path0' }), _react2.default.createElement('path', { fillOpacity: '.3', d: 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z', key: 'path1' })];
};

var BatteryCharging50Icon = _icons.Icon.extend.attrs({
  children: BatteryCharging50Path
})(_templateObject);

exports.default = BatteryCharging50Path;
exports.BatteryCharging50Icon = BatteryCharging50Icon;