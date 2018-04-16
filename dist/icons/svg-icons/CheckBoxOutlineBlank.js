'use strict';

exports.__esModule = true;
exports.CheckBoxOutlineBlankIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CheckBoxOutlineBlankPath = function CheckBoxOutlineBlankPath() {
  return [_react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z', key: 'path0' })];
};

var CheckBoxOutlineBlankIcon = _icons.Icon.extend.attrs({
  children: CheckBoxOutlineBlankPath
})(_templateObject);

exports.default = CheckBoxOutlineBlankPath;
exports.CheckBoxOutlineBlankIcon = CheckBoxOutlineBlankIcon;