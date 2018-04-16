'use strict';

exports.__esModule = true;
exports.SignalCellular4BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellular4BarPath = function SignalCellular4BarPath() {
  return [_react2.default.createElement('path', { d: 'M2 22h20V2z', key: 'path0' })];
};

var SignalCellular4BarIcon = _icons.Icon.extend.attrs({
  children: SignalCellular4BarPath
})(_templateObject);

exports.default = SignalCellular4BarPath;
exports.SignalCellular4BarIcon = SignalCellular4BarIcon;