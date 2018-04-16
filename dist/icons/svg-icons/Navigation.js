'use strict';

exports.__esModule = true;
exports.NavigationIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var NavigationPath = function NavigationPath() {
  return [_react2.default.createElement('path', { d: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z', key: 'path0' })];
};

var NavigationIcon = _icons.Icon.extend.attrs({
  children: NavigationPath
})(_templateObject);

exports.default = NavigationPath;
exports.NavigationIcon = NavigationIcon;