'use strict';

exports.__esModule = true;
exports.AirlineSeatFlatIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AirlineSeatFlatPath = function AirlineSeatFlatPath() {
  return [_react2.default.createElement('path', { d: 'M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z', key: 'path0' })];
};

var AirlineSeatFlatIcon = _icons.Icon.extend.attrs({
  children: AirlineSeatFlatPath
})(_templateObject);

exports.default = AirlineSeatFlatPath;
exports.AirlineSeatFlatIcon = AirlineSeatFlatIcon;