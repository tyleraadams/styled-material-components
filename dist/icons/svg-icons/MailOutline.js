'use strict';

exports.__esModule = true;
exports.MailOutlineIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MailOutlinePath = function MailOutlinePath() {
  return [_react2.default.createElement('path', { d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z', key: 'path0' })];
};

var MailOutlineIcon = _icons.Icon.extend.attrs({
  children: MailOutlinePath
})(_templateObject);

exports.default = MailOutlinePath;
exports.MailOutlineIcon = MailOutlineIcon;