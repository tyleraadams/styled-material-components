'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  margin: -.063rem 0;\n  color: ', ';\n\n  ', '\n\n  .primary & {\n    ', '\n  }\n'], ['\n  ', '\n  margin: -.063rem 0;\n  color: ', ';\n\n  ', '\n\n  .primary & {\n    ', '\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    ', '\n    margin: 0;\n  '], ['\n    ', '\n    margin: 0;\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n      padding-top: 8px;\n    '], ['\n      padding-top: 8px;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _typography = require('../../mixins/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TitleComponent = function TitleComponent(props) {
  return _react2.default.createElement(
    'h1',
    { className: props.className + ' card-title' },
    props.children
  );
};

var Title = (0, _styledComponents2.default)(TitleComponent)(_templateObject, (0, _typography2.default)('body2'), function (props) {
  return props.theme.textColors.primary;
}, function (props) {
  return props.large && (0, _styledComponents.css)(_templateObject2, (0, _typography2.default)('headline'));
}, function (props) {
  return props.large && (0, _styledComponents.css)(_templateObject3);
});

exports.default = Title;
module.exports = exports['default'];