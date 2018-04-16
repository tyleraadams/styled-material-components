'use strict';

exports.__esModule = true;
exports.DateRangeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DateRangePath = function DateRangePath() {
  return [_react2.default.createElement('path', { d: 'M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z', key: 'path0' })];
};

var DateRangeIcon = _icons.Icon.extend.attrs({
  children: DateRangePath
})(_templateObject);

exports.default = DateRangePath;
exports.DateRangeIcon = DateRangeIcon;