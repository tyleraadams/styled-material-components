'use strict';

exports.__esModule = true;
exports.AssistantPhotoIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AssistantPhotoPath = function AssistantPhotoPath() {
  return [_react2.default.createElement('path', { d: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z', key: 'path0' })];
};

var AssistantPhotoIcon = _icons.Icon.extend.attrs({
  children: AssistantPhotoPath
})(_templateObject);

exports.default = AssistantPhotoPath;
exports.AssistantPhotoIcon = AssistantPhotoIcon;