'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  padding: 8px 16px;\n  box-sizing: border-box;\n  color: ', ';\n\n  &:last-child {\n    padding-bottom: 24px;\n  }\n\n  .primary + & {\n    margin-top: -8px;\n    padding-top: 0;\n\n    &:last-child {\n      padding-bottom: 24px;\n    }\n  }\n'], ['\n  ', '\n  padding: 8px 16px;\n  box-sizing: border-box;\n  color: ', ';\n\n  &:last-child {\n    padding-bottom: 24px;\n  }\n\n  .primary + & {\n    margin-top: -8px;\n    padding-top: 0;\n\n    &:last-child {\n      padding-bottom: 24px;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _typography = require('../../mixins/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SupportingTextComponent = function SupportingTextComponent(props) {
  return _react2.default.createElement(
    'section',
    { className: props.className + ' card-supporting-text' },
    props.children
  );
};

var SupportingText = (0, _styledComponents2.default)(SupportingTextComponent)(_templateObject, (0, _typography2.default)('body1'), function (props) {
  return props.theme.textColors.primary;
});

exports.default = SupportingText;
module.exports = exports['default'];