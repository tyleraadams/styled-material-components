'use strict';

exports.__esModule = true;
exports.SignalCellular0BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellular0BarPath = function SignalCellular0BarPath() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M2 22h20V2z', key: 'path0' })];
};

var SignalCellular0BarIcon = _icons.Icon.extend.attrs({
  children: SignalCellular0BarPath
})(_templateObject);

exports.default = SignalCellular0BarPath;
exports.SignalCellular0BarIcon = SignalCellular0BarIcon;