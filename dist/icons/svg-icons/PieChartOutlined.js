'use strict';

exports.__esModule = true;
exports.PieChartOutlinedIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PieChartOutlinedPath = function PieChartOutlinedPath() {
  return [_react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z', key: 'path0' })];
};

var PieChartOutlinedIcon = _icons.Icon.extend.attrs({
  children: PieChartOutlinedPath
})(_templateObject);

exports.default = PieChartOutlinedPath;
exports.PieChartOutlinedIcon = PieChartOutlinedIcon;