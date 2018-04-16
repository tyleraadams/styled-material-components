'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  margin: -.063rem 0;\n  color: ', ';\n'], ['\n  ', '\n  margin: -.063rem 0;\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _typography = require('../../mixins/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SubtitleComponent = function SubtitleComponent(props) {
  return _react2.default.createElement(
    'h2',
    { className: props.className + ' card-subtitle' },
    props.children
  );
};

var Subtitle = (0, _styledComponents2.default)(SubtitleComponent)(_templateObject, (0, _typography2.default)('body1'), function (props) {
  return props.theme.textColors.primary;
});

exports.default = Subtitle;
module.exports = exports['default'];