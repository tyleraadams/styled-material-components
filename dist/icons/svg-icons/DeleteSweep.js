'use strict';

exports.__esModule = true;
exports.DeleteSweepIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DeleteSweepPath = function DeleteSweepPath() {
  return [_react2.default.createElement('path', { d: 'M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z', key: 'path0' })];
};

var DeleteSweepIcon = _icons.Icon.extend.attrs({
  children: DeleteSweepPath
})(_templateObject);

exports.default = DeleteSweepPath;
exports.DeleteSweepIcon = DeleteSweepIcon;