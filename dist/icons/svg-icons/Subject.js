'use strict';

exports.__esModule = true;
exports.SubjectIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SubjectPath = function SubjectPath() {
  return [_react2.default.createElement('path', { d: 'M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z', key: 'path0' })];
};

var SubjectIcon = _icons.Icon.extend.attrs({
  children: SubjectPath
})(_templateObject);

exports.default = SubjectPath;
exports.SubjectIcon = SubjectIcon;