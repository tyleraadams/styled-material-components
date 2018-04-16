'use strict';

exports.__esModule = true;
exports.DirectionsRailwayIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DirectionsRailwayPath = function DirectionsRailwayPath() {
  return [_react2.default.createElement('path', { d: 'M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z', key: 'path0' })];
};

var DirectionsRailwayIcon = _icons.Icon.extend.attrs({
  children: DirectionsRailwayPath
})(_templateObject);

exports.default = DirectionsRailwayPath;
exports.DirectionsRailwayIcon = DirectionsRailwayIcon;