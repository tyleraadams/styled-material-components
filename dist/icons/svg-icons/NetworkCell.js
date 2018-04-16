'use strict';

exports.__esModule = true;
exports.NetworkCellIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var NetworkCellPath = function NetworkCellPath() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M2 22h20V2z', key: 'path0' }), _react2.default.createElement('path', { d: 'M17 7L2 22h15z', key: 'path1' })];
};

var NetworkCellIcon = _icons.Icon.extend.attrs({
  children: NetworkCellPath
})(_templateObject);

exports.default = NetworkCellPath;
exports.NetworkCellIcon = NetworkCellIcon;