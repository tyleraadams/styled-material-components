'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  margin: -.063rem 0;\n\n  ', '\n\n  .primary & {\n    ', '\n  }\n'], ['\n  ', '\n  margin: -.063rem 0;\n\n  ', '\n\n  .primary & {\n    ', '\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    ', '\n    margin: 0;\n  '], ['\n    ', '\n    margin: 0;\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n      padding-top: 8px;\n    '], ['\n      padding-top: 8px;\n    ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  ', '\n  margin: -.063rem 0;\n  color: ', ';\n'], ['\n  ', '\n  margin: -.063rem 0;\n  color: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  padding: 16px;\n\n  ', ' {\n    position: absolute;\n  }\n\n  > .smc-card-title-container {\n    margin-left: ', '\n  }\n\n  &:last-child {\n    padding-bottom: 24px;\n  }\n'], ['\n  padding: 16px;\n\n  ', ' {\n    position: absolute;\n  }\n\n  > .smc-card-title-container {\n    margin-left: ', '\n  }\n\n  &:last-child {\n    padding-bottom: 24px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Avatar = require('../Avatar');

var _typography = require('../../mixins/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Title = _styledComponents2.default.h1(_templateObject, (0, _typography2.default)('body2'), function (props) {
  return props.large && (0, _styledComponents.css)(_templateObject2, (0, _typography2.default)('headline'));
}, function (props) {
  return props.large && (0, _styledComponents.css)(_templateObject3);
});

var Subheader = _styledComponents2.default.h2(_templateObject4, (0, _typography2.default)('body1'), function (props) {
  return props.theme.textColors.primary;
});

var PrimaryComponent = function PrimaryComponent(_ref) {
  var avatar = _ref.avatar,
      title = _ref.title,
      subheader = _ref.subheader,
      className = _ref.className,
      large = _ref.large;
  return _react2.default.createElement(
    'section',
    { className: className + ' card-primary' },
    avatar && _react2.default.createElement(_Avatar.Avatar, { src: avatar }),
    _react2.default.createElement(
      'div',
      { className: 'smc-card-title-container' },
      title && _react2.default.createElement(
        Title,
        { className: 'card-title', large: large },
        title
      ),
      subheader && _react2.default.createElement(
        Subheader,
        { className: 'card-subtitle' },
        subheader
      )
    )
  );
};

var Primary = (0, _styledComponents2.default)(PrimaryComponent)(_templateObject5, _Avatar.Avatar, function (props) {
  return props.avatar ? '56px' : '0px';
});

exports.default = Primary;
module.exports = exports['default'];