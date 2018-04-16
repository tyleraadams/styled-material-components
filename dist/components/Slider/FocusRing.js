'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', 'px;\n  width: ', 'px;\n  background: ', ';\n  transition: height width ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: inherit;\n  border-radius: 50%;\n  flex-shrink: 0;\n'], ['\n  height: ', 'px;\n  width: ', 'px;\n  background: ', ';\n  transition: height width ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: inherit;\n  border-radius: 50%;\n  flex-shrink: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FocusRingComponent = function FocusRingComponent(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className + ' smc-slider-focus-ring' },
    props.children
  );
};

var getFocusSize = function getFocusSize(props) {
  return props.navigatingWithKeys ? props.theme.slider.sizes.focusHalo : 0;
};

var getFocusColor = function getFocusColor(_ref) {
  var atMin = _ref.atMin,
      colors = _ref.theme.slider.colors;
  return atMin ? colors.track : colors.focusHalo;
};

var FocusRing = (0, _styledComponents2.default)(FocusRingComponent)(_templateObject, getFocusSize, getFocusSize, getFocusColor, function (props) {
  return props.theme.slider.transitions.main;
});

exports.default = FocusRing;
module.exports = exports['default'];