'use strict';

exports.__esModule = true;
exports.AirlineSeatFlatAngledIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AirlineSeatFlatAngledPath = function AirlineSeatFlatAngledPath() {
  return [_react2.default.createElement('path', { d: 'M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09c2.1.76 3.18 3.06 2.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94c1.49-.72 2.12-2.51 1.41-4C7.99 4.71 6.2 4.08 4.7 4.8c-1.49.71-2.12 2.5-1.4 4 .71 1.49 2.5 2.12 4 1.4z', key: 'path0' })];
};

var AirlineSeatFlatAngledIcon = _icons.Icon.extend.attrs({
  children: AirlineSeatFlatAngledPath
})(_templateObject);

exports.default = AirlineSeatFlatAngledPath;
exports.AirlineSeatFlatAngledIcon = AirlineSeatFlatAngledIcon;