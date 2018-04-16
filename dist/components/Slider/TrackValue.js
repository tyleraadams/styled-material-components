'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: ', 'px;\n  height: 100%;\n  opacity: ', ';\n  transition: all ', ';\n  background: ', ';\n'], ['\n  width: ', 'px;\n  height: 100%;\n  opacity: ', ';\n  transition: all ', ';\n  background: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TrackValueComponent = function TrackValueComponent(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className + ' smc-slider-track-value' },
    props.children
  );
};

var TrackValue = (0, _styledComponents2.default)(TrackValueComponent)(_templateObject, function (props) {
  return props.width;
}, function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 0 : 1;
}, function (props) {
  return props.theme.slider.transitions.main;
}, function (props) {
  return props.disabled ? props.theme.slider.colors.disabled : props.theme.slider.colors.main;
});

exports.default = TrackValue;
module.exports = exports['default'];