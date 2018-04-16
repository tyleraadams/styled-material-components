'use strict';

exports.__esModule = true;
exports.ViewAgendaIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewAgendaPath = function ViewAgendaPath() {
  return [_react2.default.createElement('path', { d: 'M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z', key: 'path0' })];
};

var ViewAgendaIcon = _icons.Icon.extend.attrs({
  children: ViewAgendaPath
})(_templateObject);

exports.default = ViewAgendaPath;
exports.ViewAgendaIcon = ViewAgendaIcon;