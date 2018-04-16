'use strict';

exports.__esModule = true;
exports.GradeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var GradePath = function GradePath() {
  return [_react2.default.createElement('path', { d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z', key: 'path0' })];
};

var GradeIcon = _icons.Icon.extend.attrs({
  children: GradePath
})(_templateObject);

exports.default = GradePath;
exports.GradeIcon = GradeIcon;