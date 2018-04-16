'use strict';

exports.__esModule = true;
exports.BatteryChargingFullIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BatteryChargingFullPath = function BatteryChargingFullPath() {
  return [_react2.default.createElement('path', { d: 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z', key: 'path0' })];
};

var BatteryChargingFullIcon = _icons.Icon.extend.attrs({
  children: BatteryChargingFullPath
})(_templateObject);

exports.default = BatteryChargingFullPath;
exports.BatteryChargingFullIcon = BatteryChargingFullIcon;