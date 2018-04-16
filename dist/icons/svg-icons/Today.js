'use strict';

exports.__esModule = true;
exports.TodayIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TodayPath = function TodayPath() {
  return [_react2.default.createElement('path', { d: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z', key: 'path0' })];
};

var TodayIcon = _icons.Icon.extend.attrs({
  children: TodayPath
})(_templateObject);

exports.default = TodayPath;
exports.TodayIcon = TodayIcon;