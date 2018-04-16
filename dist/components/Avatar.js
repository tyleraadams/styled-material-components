'use strict';

exports.__esModule = true;
exports.Avatar = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  // This is just here because we have to have some sort of styles applied at this level.\n  text-align: left;\n'], ['\n  // This is just here because we have to have some sort of styles applied at this level.\n  text-align: left;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Circular = require('./Circular');

var _Image = require('./Image');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var formatProps = function formatProps(_ref) {
  var name = _ref.name,
      children = _ref.children;

  if (!name) {
    return children;
  } else if (name.length <= 2) {
    return name;
  }

  var nameArr = name.split(' ');
  var initials = nameArr.length === 1 ? nameArr[0][0] : nameArr[0][0] + nameArr[1][0];

  return initials.toUpperCase();
};

var Avatar = exports.Avatar = _Circular.Circular.extend.attrs({
  children: function children(props) {
    return props.src ? _react2.default.createElement(_Image.Image, { src: props.src }) : formatProps(props);
  }
})(_templateObject);