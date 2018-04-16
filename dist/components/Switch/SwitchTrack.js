'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background-color: rgba(0, 150, 136, .5);\n'], ['\n  background-color: rgba(0, 150, 136, .5);\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background-color: rgba(189, 189, 189, 1);\n'], ['\n  background-color: rgba(189, 189, 189, 1);\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  background-color: rgba(128, 203, 196, .5);\n'], ['\n  background-color: rgba(128, 203, 196, .5);\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  background-color: rgba(255, 255, 255, .5);\n'], ['\n  background-color: rgba(255, 255, 255, .5);\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  background-color: rgba(0, 0, 0, .12);\n'], ['\n  background-color: rgba(0, 0, 0, .12);\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  background-color: rgba(255, 255, 255, .1);\n'], ['\n  background-color: rgba(255, 255, 255, .1);\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  width: 40px;\n  height: 14px;\n  border-radius: 15px;\n  position: relative;\n  display: inline-flex;\n  margin-right: 15px;\n  align-items: center;\n\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n\n'], ['\n  width: 40px;\n  height: 14px;\n  border-radius: 15px;\n  position: relative;\n  display: inline-flex;\n  margin-right: 15px;\n  align-items: center;\n\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SwitchTrackComponent = function SwitchTrackComponent(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className + ' smc-switch' },
    props.children
  );
};

var lightOn = (0, _styledComponents.css)(_templateObject);

var lightOff = (0, _styledComponents.css)(_templateObject2);

var darkOn = (0, _styledComponents.css)(_templateObject3);

var darkOff = (0, _styledComponents.css)(_templateObject4);

var lightDisabled = (0, _styledComponents.css)(_templateObject5);

var darkDisabled = (0, _styledComponents.css)(_templateObject6);

var SwitchTrack = (0, _styledComponents2.default)(SwitchTrackComponent)(_templateObject7, function (props) {
  return props.light && props.on && lightOn;
}, function (props) {
  return props.light && !props.on && lightOff;
}, function (props) {
  return props.dark && props.on && darkOn;
}, function (props) {
  return props.dark && !props.on && darkOff;
}, function (props) {
  return props.light && props.disabled && lightDisabled;
}, function (props) {
  return props.dark && props.disabled && darkDisabled;
});

exports.default = SwitchTrack;
module.exports = exports['default'];