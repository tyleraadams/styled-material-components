'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  width: auto;\n  height: 80px;\n  margin: 16px 0 0;\n  padding: 0;\n  ', '\n'], ['\n  display: inline-block;\n  width: auto;\n  height: 80px;\n  margin: 16px 0 0;\n  padding: 0;\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MediaItemComponent = function MediaItemComponent(props) {
  return _react2.default.createElement(
    'img',
    { className: props.className + ' card-media-item', src: props.src },
    props.children
  );
};

var MediaItem = (0, _styledComponents2.default)(MediaItemComponent)(_templateObject, function (props) {
  return props.scale && '\n    height: ' + props.scale * 80 + 'px;\n    width: auto;\n    ' + (props.scale === 3 && '\n      margin-bottom: 16px;\n    ') + '\n  ';
});

exports.default = MediaItem;
module.exports = exports['default'];