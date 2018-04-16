'use strict';

exports.__esModule = true;
exports.RemoveIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var RemovePath = function RemovePath() {
  return [_react2.default.createElement('path', { d: 'M19 13H5v-2h14v2z', key: 'path0' })];
};

var RemoveIcon = _icons.Icon.extend.attrs({
  children: RemovePath
})(_templateObject);

exports.default = RemovePath;
exports.RemoveIcon = RemoveIcon;