'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  height: ', 'px;\n  background: ', ';\n  transition: ', ';\n  display: flex;\n  justify-content: flex-start;\n'], ['\n  width: 100%;\n  height: ', 'px;\n  background: ', ';\n  transition: ', ';\n  display: flex;\n  justify-content: flex-start;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TracklineComponent = function TracklineComponent(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className + ' smc-slider-track-line' },
    props.children
  );
};

// TODO use focus color
var getTracklineBackground = function getTracklineBackground(props) {
  if (props.disabled || props.atMin) return props.theme.slider.colors.disabled;
  // if (props.focused) return props.theme.slider.colors.focusTrack;
  return props.theme.slider.colors.track;
};

var Trackline = (0, _styledComponents2.default)(TracklineComponent)(_templateObject, function (props) {
  return props.theme.slider.sizes.trackHeight;
}, getTracklineBackground, function (props) {
  return 'background ' + props.theme.slider.transitions.slider;
});

exports.default = Trackline;
module.exports = exports['default'];