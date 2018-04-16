'use strict';

exports.__esModule = true;
exports.VerifiedUserIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VerifiedUserPath = function VerifiedUserPath() {
  return [_react2.default.createElement('path', { d: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z', key: 'path0' })];
};

var VerifiedUserIcon = _icons.Icon.extend.attrs({
  children: VerifiedUserPath
})(_templateObject);

exports.default = VerifiedUserPath;
exports.VerifiedUserIcon = VerifiedUserIcon;