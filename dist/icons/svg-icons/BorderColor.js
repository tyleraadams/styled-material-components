'use strict';

exports.__esModule = true;
exports.BorderColorIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BorderColorPath = function BorderColorPath() {
  return [_react2.default.createElement('path', { d: 'M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z', key: 'path0' }), _react2.default.createElement('path', { fillOpacity: '.36', d: 'M0 20h24v4H0z', key: 'path1' })];
};

var BorderColorIcon = _icons.Icon.extend.attrs({
  children: BorderColorPath
})(_templateObject);

exports.default = BorderColorPath;
exports.BorderColorIcon = BorderColorIcon;