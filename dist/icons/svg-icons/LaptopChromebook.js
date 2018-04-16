'use strict';

exports.__esModule = true;
exports.LaptopChromebookIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LaptopChromebookPath = function LaptopChromebookPath() {
  return [_react2.default.createElement('path', { d: 'M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z', key: 'path0' })];
};

var LaptopChromebookIcon = _icons.Icon.extend.attrs({
  children: LaptopChromebookPath
})(_templateObject);

exports.default = LaptopChromebookPath;
exports.LaptopChromebookIcon = LaptopChromebookIcon;