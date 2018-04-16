'use strict';

exports.__esModule = true;
exports.SpellcheckIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SpellcheckPath = function SpellcheckPath() {
  return [_react2.default.createElement('path', { d: 'M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z', key: 'path0' })];
};

var SpellcheckIcon = _icons.Icon.extend.attrs({
  children: SpellcheckPath
})(_templateObject);

exports.default = SpellcheckPath;
exports.SpellcheckIcon = SpellcheckIcon;