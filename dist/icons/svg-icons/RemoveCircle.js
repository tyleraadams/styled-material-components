'use strict';

exports.__esModule = true;
exports.RemoveCircleIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var RemoveCirclePath = function RemoveCirclePath() {
  return [_react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z', key: 'path0' })];
};

var RemoveCircleIcon = _icons.Icon.extend.attrs({
  children: RemoveCirclePath
})(_templateObject);

exports.default = RemoveCirclePath;
exports.RemoveCircleIcon = RemoveCircleIcon;