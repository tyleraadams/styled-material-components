'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  to {\n    opacity  : 0;\n    transform: scale(2);\n  }\n'], ['\n  to {\n    opacity  : 0;\n    transform: scale(2);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    position: relative;\n    overflow: hidden;\n\n    & .ripple-container {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n    & .ripple-container span {\n      transform: scale(0);\n      border-radius: 100%;\n      position: absolute;\n      opacity: 0.75;\n      background-color: #fff;\n      animation: ', ' 1000ms;\n    }\n  '], ['\n    position: relative;\n    overflow: hidden;\n\n    & .ripple-container {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n    & .ripple-container span {\n      transform: scale(0);\n      border-radius: 100%;\n      position: absolute;\n      opacity: 0.75;\n      background-color: #fff;\n      animation: ', ' 1000ms;\n    }\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var rippleAnimation = (0, _styledComponents.keyframes)(_templateObject);

var withRipple = function withRipple(ComposedComponent) {
  var RippledComponent = ComposedComponent.extend(_templateObject2, rippleAnimation);
  return function (_Component) {
    _inherits(RippleEnabledComponent, _Component);

    function RippleEnabledComponent() {
      var _temp, _this, _ret;

      _classCallCheck(this, RippleEnabledComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function (event) {
        var ripple = event.target;
        var size = ripple.offsetWidth;
        var pos = ripple.getBoundingClientRect();
        var rippler = document.createElement('span');
        var x = event.pageX - pos.left - size / 2;
        var y = event.pageY - pos.top - size / 2;
        var style = 'top: ' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';
        _this.rippleContainer.appendChild(rippler);
        rippler.setAttribute('style', style);
      }, _this.reset = function () {
        if (_this.clear) clearTimeout(_this.clear);
        _this.clear = setTimeout(function () {
          while (_this.rippleContainer && _this.rippleContainer.firstChild) {
            _this.rippleContainer.removeChild(_this.rippleContainer.firstChild);
          }
        }, 2000);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    /**
     * When a button click occurs, add a span element that will receive
     * the styling to create the 'ripple' effect and animate it moving
     * across the parent container.
     */


    /**
     * debounced function to remove all span elements inside the ripple
     * container. This is to prevent build up of span elements after they
     * have been animated out of view.
     */


    RippleEnabledComponent.prototype.render = function render() {
      var _this2 = this;

      return _react2.default.createElement(
        RippledComponent,
        _extends({}, this.props, { onMouseDown: this.handleClick, onMouseUp: this.reset }),
        this.props.children,
        _react2.default.createElement('div', { ref: function ref(rippleContainer) {
            _this2.rippleContainer = rippleContainer;
          }, className: 'ripple-container' })
      );
    };

    return RippleEnabledComponent;
  }(_react.Component);
};

exports.default = withRipple;
module.exports = exports['default'];