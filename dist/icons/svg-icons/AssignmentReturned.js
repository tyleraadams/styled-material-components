'use strict';

exports.__esModule = true;
exports.AssignmentReturnedIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var AssignmentReturnedPath = function AssignmentReturnedPath() {
  return [_react2.default.createElement('path', { d: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z', key: 'path0' })];
};

var AssignmentReturnedIcon = _icons.Icon.extend.attrs({
  children: AssignmentReturnedPath
})(_templateObject);

exports.default = AssignmentReturnedPath;
exports.AssignmentReturnedIcon = AssignmentReturnedIcon;