'use strict';

exports.__esModule = true;
exports.BatteryCharging80Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BatteryCharging80Path = function BatteryCharging80Path() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z', key: 'path0' }), _react2.default.createElement('path', { d: 'M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z', key: 'path1' })];
};

var BatteryCharging80Icon = _icons.Icon.extend.attrs({
  children: BatteryCharging80Path
})(_templateObject);

exports.default = BatteryCharging80Path;
exports.BatteryCharging80Icon = BatteryCharging80Icon;