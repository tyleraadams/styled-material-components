'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: 13px;\n  color: ', ';\n  text-align: ', ';\n  padding-left: ', 'px;\n  padding-right: ', 'px;\n'], ['\n  font-size: 13px;\n  color: ', ';\n  text-align: ', ';\n  padding-left: ', 'px;\n  padding-right: ', 'px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TitleComponent = function TitleComponent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      column = _ref.column;
  return _react2.default.createElement(
    'th',
    { className: 'smc-table-title ' + className + ' smc-table-title-' + column },
    children
  );
};

var Title = (0, _styledComponents2.default)(TitleComponent)(_templateObject, function (props) {
  return props.sortedBy ? props.theme.textColors.primary : props.theme.textColors.secondary;
}, function (_ref2) {
  var numerical = _ref2.numerical;
  return numerical ? 'right' : 'left';
}, function (_ref3) {
  var first = _ref3.first;
  return first ? 24 : 56;
}, function (_ref4) {
  var last = _ref4.last;
  return last ? 24 : 0;
});

exports.default = Title;
module.exports = exports['default'];