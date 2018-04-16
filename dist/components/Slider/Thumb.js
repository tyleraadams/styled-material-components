'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', 'px;\n  width: ', 'px;\n  border: ', 'px solid ', ';\n  transition: all ', ';\n  background: ', ';\n  border-radius: 50%;\n  outline: none;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  height: ', 'px;\n  width: ', 'px;\n  border: ', 'px solid ', ';\n  transition: all ', ';\n  background: ', ';\n  border-radius: 50%;\n  outline: none;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var getThumbColor = function getThumbColor(props) {
  var disabled = props.disabled,
      colors = props.theme.slider.colors;

  if (disabled) return colors.disabled;
  return props.atMin ? colors.pageColor : colors.main;
};

var getThumbSize = function getThumbSize(props) {
  if (props.dragging) return props.theme.slider.sizes.thumbClicked;
  if (props.disabled) return props.theme.slider.sizes.thumbDisabled;
  return props.theme.slider.sizes.thumb;
};

var getThumbBorderColor = function getThumbBorderColor(props) {
  var atMin = props.atMin,
      colors = props.theme.slider.colors;

  return atMin ? colors.track : getThumbColor(props);
};

var getThumbBorderSize = function getThumbBorderSize(props) {
  if (props.disabled) return 0;
  return props.theme.slider.sizes.thumbBorder;
};

var Thumb = _styledComponents2.default.div(_templateObject, getThumbSize, getThumbSize, getThumbBorderSize, getThumbBorderColor, function (props) {
  return props.theme.slider.transitions.main;
}, getThumbColor);

exports.default = Thumb;
module.exports = exports['default'];