'use strict';

exports.__esModule = true;
exports.AnnouncementIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AnnouncementPath = function AnnouncementPath() {
  return [_react2.default.createElement('path', { d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z', key: 'path0' })];
};

var AnnouncementIcon = _icons.Icon.extend.attrs({
  children: AnnouncementPath
})(_templateObject);

exports.default = AnnouncementPath;
exports.AnnouncementIcon = AnnouncementIcon;