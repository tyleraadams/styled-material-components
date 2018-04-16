'use strict';

exports.__esModule = true;
exports.SignalCellular3BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellular3BarPath = function SignalCellular3BarPath() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M2 22h20V2z', key: 'path0' }), _react2.default.createElement('path', { d: 'M17 7L2 22h15z', key: 'path1' })];
};

var SignalCellular3BarIcon = _icons.Icon.extend.attrs({
  children: SignalCellular3BarPath
})(_templateObject);

exports.default = SignalCellular3BarPath;
exports.SignalCellular3BarIcon = SignalCellular3BarIcon;