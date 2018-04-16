'use strict';

exports.__esModule = true;
exports.EventSeatIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var EventSeatPath = function EventSeatPath() {
  return [_react2.default.createElement('path', { d: 'M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z', key: 'path0' })];
};

var EventSeatIcon = _icons.Icon.extend.attrs({
  children: EventSeatPath
})(_templateObject);

exports.default = EventSeatPath;
exports.EventSeatIcon = EventSeatIcon;