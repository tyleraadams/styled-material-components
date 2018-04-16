'use strict';

exports.__esModule = true;
exports.DoneIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DonePath = function DonePath() {
  return [_react2.default.createElement('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z', key: 'path0' })];
};

var DoneIcon = _icons.Icon.extend.attrs({
  children: DonePath
})(_templateObject);

exports.default = DonePath;
exports.DoneIcon = DoneIcon;