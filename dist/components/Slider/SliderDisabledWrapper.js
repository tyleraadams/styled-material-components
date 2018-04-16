'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', 'px;\n  width: ', 'px;\n  transition: all ', ';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ', ';\n  border-radius: 50%;\n  position: absolute;\n'], ['\n  height: ', 'px;\n  width: ', 'px;\n  transition: all ', ';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ', ';\n  border-radius: 50%;\n  position: absolute;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SliderDisabledWrapperComponent = function SliderDisabledWrapperComponent(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className + ' smc-slider-disabled-wrapper' },
    props.children
  );
};

var getSliderDisabledWrapperSize = function getSliderDisabledWrapperSize(props) {
  var disabled = props.disabled,
      sizes = props.theme.slider.sizes;

  if (disabled) return sizes.thumbDisabled + sizes.thumbDisabledBorder;
  return 0;
};

var SliderDisabledWrapper = (0, _styledComponents2.default)(SliderDisabledWrapperComponent)(_templateObject, getSliderDisabledWrapperSize, getSliderDisabledWrapperSize, function (props) {
  return props.theme.slider.transitions.main;
}, function (props) {
  return props.theme.slider.colors.pageColor;
});

exports.default = SliderDisabledWrapper;
module.exports = exports['default'];