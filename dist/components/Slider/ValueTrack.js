'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: 100%;\n  overflow: hidden;\n  max-width: ', 'px;\n'], ['\n  height: 100%;\n  overflow: hidden;\n  max-width: ', 'px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ValueTrackComponent = function ValueTrackComponent(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className + ' smc-slider-value-size' },
    props.children
  );
};

var ValueTrack = (0, _styledComponents2.default)(ValueTrackComponent)(_templateObject, function (props) {
  return props.width;
});

exports.default = ValueTrack;
module.exports = exports['default'];