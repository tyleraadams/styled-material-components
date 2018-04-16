'use strict';

exports.__esModule = true;
exports.RoomServiceIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var RoomServicePath = function RoomServicePath() {
  return [_react2.default.createElement('path', { d: 'M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z', key: 'path0' })];
};

var RoomServiceIcon = _icons.Icon.extend.attrs({
  children: RoomServicePath
})(_templateObject);

exports.default = RoomServicePath;
exports.RoomServiceIcon = RoomServiceIcon;