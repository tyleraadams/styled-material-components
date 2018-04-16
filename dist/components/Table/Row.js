'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  transition: 0.1s;\n  ', '\n  ', '\n  height: ', 'px;\n'], ['\n  transition: 0.1s;\n  ', '\n  ', '\n  height: ', 'px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var RowComponent = function RowComponent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'tr',
    { className: 'smc-table-row ' + className },
    children
  );
};

var Row = (0, _styledComponents2.default)(RowComponent)(_templateObject, function (_ref2) {
  var header = _ref2.header;
  return !header && '\n    &:hover {\n      background-color: #eee;\n    }\n  ';
}, function (_ref3) {
  var selected = _ref3.selected;
  return selected && '\n    background-color: #F5F5F5;\n';
}, function (_ref4) {
  var header = _ref4.header;
  return header ? 54 : 48;
});

exports.default = Row;
module.exports = exports['default'];