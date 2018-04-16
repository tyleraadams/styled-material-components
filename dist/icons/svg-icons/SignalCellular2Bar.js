'use strict';

exports.__esModule = true;
exports.SignalCellular2BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellular2BarPath = function SignalCellular2BarPath() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M2 22h20V2z', key: 'path0' }), _react2.default.createElement('path', { d: 'M14 10L2 22h12z', key: 'path1' })];
};

var SignalCellular2BarIcon = _icons.Icon.extend.attrs({
  children: SignalCellular2BarPath
})(_templateObject);

exports.default = SignalCellular2BarPath;
exports.SignalCellular2BarIcon = SignalCellular2BarIcon;