'use strict';

exports.__esModule = true;
exports.ForumIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ForumPath = function ForumPath() {
  return [_react2.default.createElement('path', { d: 'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z', key: 'path0' })];
};

var ForumIcon = _icons.Icon.extend.attrs({
  children: ForumPath
})(_templateObject);

exports.default = ForumPath;
exports.ForumIcon = ForumIcon;