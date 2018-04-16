'use strict';

exports.__esModule = true;
exports.CardMembershipIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CardMembershipPath = function CardMembershipPath() {
  return [_react2.default.createElement('path', { d: 'M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z', key: 'path0' })];
};

var CardMembershipIcon = _icons.Icon.extend.attrs({
  children: CardMembershipPath
})(_templateObject);

exports.default = CardMembershipPath;
exports.CardMembershipIcon = CardMembershipIcon;