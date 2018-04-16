'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  &:hover {\n    ', ';\n    transform: translateY(-7px);\n  }\n'], ['\n  &:hover {\n    ', ';\n    transform: translateY(-7px);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0;\n  box-sizing: border-box;\n  border-radius: 2px;\n  overflow: hidden;\n  ', ';\n  transition-duration: 0.3s;\n  ', '\n'], ['\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0;\n  box-sizing: border-box;\n  border-radius: 2px;\n  overflow: hidden;\n  ', ';\n  transition-duration: 0.3s;\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _elevation = require('../../mixins/elevation');

var _elevation2 = _interopRequireDefault(_elevation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CardComponent = function CardComponent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: className + ' smc-card' },
    children
  );
};

var hoverStyles = (0, _styledComponents.css)(_templateObject, (0, _elevation2.default)(8));

var Card = (0, _styledComponents2.default)(CardComponent)(_templateObject2, (0, _elevation2.default)(2), function (props) {
  return props.hover && hoverStyles;
});

Card.defaultProps = {
  hover: false
};

exports.default = Card;
module.exports = exports['default'];