'use strict';

exports.__esModule = true;
exports.StorageIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StoragePath = function StoragePath() {
  return [_react2.default.createElement('path', { d: 'M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z', key: 'path0' })];
};

var StorageIcon = _icons.Icon.extend.attrs({
  children: StoragePath
})(_templateObject);

exports.default = StoragePath;
exports.StorageIcon = StorageIcon;