'use strict';

exports.__esModule = true;
exports.CollectionsBookmarkIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CollectionsBookmarkPath = function CollectionsBookmarkPath() {
  return [_react2.default.createElement('path', { d: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z', key: 'path0' })];
};

var CollectionsBookmarkIcon = _icons.Icon.extend.attrs({
  children: CollectionsBookmarkPath
})(_templateObject);

exports.default = CollectionsBookmarkPath;
exports.CollectionsBookmarkIcon = CollectionsBookmarkIcon;