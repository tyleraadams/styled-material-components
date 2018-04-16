'use strict';

exports.__esModule = true;
exports.PauseIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PausePath = function PausePath() {
  return [_react2.default.createElement('path', { d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z', key: 'path0' })];
};

var PauseIcon = _icons.Icon.extend.attrs({
  children: PausePath
})(_templateObject);

exports.default = PausePath;
exports.PauseIcon = PauseIcon;