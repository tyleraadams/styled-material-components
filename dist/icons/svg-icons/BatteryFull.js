'use strict';

exports.__esModule = true;
exports.BatteryFullIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BatteryFullPath = function BatteryFullPath() {
  return [_react2.default.createElement('path', { d: 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z', key: 'path0' })];
};

var BatteryFullIcon = _icons.Icon.extend.attrs({
  children: BatteryFullPath
})(_templateObject);

exports.default = BatteryFullPath;
exports.BatteryFullIcon = BatteryFullIcon;