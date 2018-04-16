'use strict';

exports.__esModule = true;
exports.FormatColorTextIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatColorTextPath = function FormatColorTextPath() {
  return [_react2.default.createElement('path', { fillOpacity: '.36', d: 'M0 20h24v4H0z', key: 'path0' }), _react2.default.createElement('path', { d: 'M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z', key: 'path1' })];
};

var FormatColorTextIcon = _icons.Icon.extend.attrs({
  children: FormatColorTextPath
})(_templateObject);

exports.default = FormatColorTextPath;
exports.FormatColorTextIcon = FormatColorTextIcon;