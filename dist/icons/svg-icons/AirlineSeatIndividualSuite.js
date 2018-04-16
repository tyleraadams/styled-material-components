'use strict';

exports.__esModule = true;
exports.AirlineSeatIndividualSuiteIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AirlineSeatIndividualSuitePath = function AirlineSeatIndividualSuitePath() {
  return [_react2.default.createElement('path', { d: 'M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z', key: 'path0' })];
};

var AirlineSeatIndividualSuiteIcon = _icons.Icon.extend.attrs({
  children: AirlineSeatIndividualSuitePath
})(_templateObject);

exports.default = AirlineSeatIndividualSuitePath;
exports.AirlineSeatIndividualSuiteIcon = AirlineSeatIndividualSuiteIcon;