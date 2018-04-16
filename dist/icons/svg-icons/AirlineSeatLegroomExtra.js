'use strict';

exports.__esModule = true;
exports.AirlineSeatLegroomExtraIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AirlineSeatLegroomExtraPath = function AirlineSeatLegroomExtraPath() {
  return [_react2.default.createElement('path', { d: 'M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98c-.34-.68-1.03-1.12-1.79-1.12L11 9V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z', key: 'path0' })];
};

var AirlineSeatLegroomExtraIcon = _icons.Icon.extend.attrs({
  children: AirlineSeatLegroomExtraPath
})(_templateObject);

exports.default = AirlineSeatLegroomExtraPath;
exports.AirlineSeatLegroomExtraIcon = AirlineSeatLegroomExtraIcon;