'use strict';

exports.__esModule = true;
exports.SignalCellular1BarIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellular1BarPath = function SignalCellular1BarPath() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M2 22h20V2z', key: 'path0' }), _react2.default.createElement('path', { d: 'M12 12L2 22h10z', key: 'path1' })];
};

var SignalCellular1BarIcon = _icons.Icon.extend.attrs({
  children: SignalCellular1BarPath
})(_templateObject);

exports.default = SignalCellular1BarPath;
exports.SignalCellular1BarIcon = SignalCellular1BarIcon;