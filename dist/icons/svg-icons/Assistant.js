'use strict';

exports.__esModule = true;
exports.AssistantIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AssistantPath = function AssistantPath() {
  return [_react2.default.createElement('path', { d: 'M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z', key: 'path0' })];
};

var AssistantIcon = _icons.Icon.extend.attrs({
  children: AssistantPath
})(_templateObject);

exports.default = AssistantPath;
exports.AssistantIcon = AssistantIcon;