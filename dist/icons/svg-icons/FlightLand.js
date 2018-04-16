'use strict';

exports.__esModule = true;
exports.FlightLandIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FlightLandPath = function FlightLandPath() {
  return [_react2.default.createElement('path', { d: 'M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z', key: 'path0' })];
};

var FlightLandIcon = _icons.Icon.extend.attrs({
  children: FlightLandPath
})(_templateObject);

exports.default = FlightLandPath;
exports.FlightLandIcon = FlightLandIcon;