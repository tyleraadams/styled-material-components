'use strict';

exports.__esModule = true;
exports.GolfCourseIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var GolfCoursePath = function GolfCoursePath() {
  return [_react2.default.createElement('path', { d: 'M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z', key: 'path0' })];
};

var GolfCourseIcon = _icons.Icon.extend.attrs({
  children: GolfCoursePath
})(_templateObject);

exports.default = GolfCoursePath;
exports.GolfCourseIcon = GolfCourseIcon;