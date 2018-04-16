'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', 'px;\n  cursor: ', ';\n  width: 100%;\n'], ['\n  height: ', 'px;\n  cursor: ', ';\n  width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SliderThumb = require('./SliderThumb');

var _SliderThumb2 = _interopRequireDefault(_SliderThumb);

var _Trackline = require('./Trackline');

var _Trackline2 = _interopRequireDefault(_Trackline);

var _TrackValue = require('./TrackValue');

var _TrackValue2 = _interopRequireDefault(_TrackValue);

var _ValueTrack = require('./ValueTrack');

var _ValueTrack2 = _interopRequireDefault(_ValueTrack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getValuePerPixel = function getValuePerPixel(min, max, width) {
  if (width === 0) return 1;
  var range = max - min;
  return range / width;
};

var getPixelPerValue = function getPixelPerValue(min, max, width) {
  var range = max - min;
  return width / range;
};

var SliderTrackComponent = function (_PureComponent) {
  _inherits(SliderTrackComponent, _PureComponent);

  function SliderTrackComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, SliderTrackComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      pixelsPerValue: null,
      valuePerPixel: null,
      cursorXAtMin: null,
      useTransitions: false,
      focused: false,
      width: null
    }, _this.componentDidMount = function () {
      window.addEventListener('resize', _this.getTrackWidth);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener('resize', _this.getTrackWidth);
    }, _this.setTrack = function (el) {
      _this.track = el;
      _this.getTrackWidth();
    }, _this.getTrackWidth = function () {
      if (!_this.track) return;
      var _this$props = _this.props,
          max = _this$props.max,
          min = _this$props.min;
      /* eslint-disable react/no-find-dom-node */

      var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(_this.track).getBoundingClientRect(),
          width = _ReactDOM$findDOMNode.width,
          left = _ReactDOM$findDOMNode.left;
      /* eslint-enable */


      var pixelsPerValue = getPixelPerValue(min, max, width);
      var valuePerPixel = getValuePerPixel(min, max, width);
      _this.setState({
        width: width,
        pixelsPerValue: pixelsPerValue,
        valuePerPixel: valuePerPixel,
        cursorXAtMin: left
      });
    }, _this.handleDrag = function (pixelsFromMin) {
      var continuous = _this.props.continuous;
      var valuePerPixel = _this.state.valuePerPixel;
      var _this$props2 = _this.props,
          value = _this$props2.value,
          step = _this$props2.step,
          min = _this$props2.min;

      var valueFromMin = pixelsFromMin * valuePerPixel;
      var continuousNextValue = valueFromMin + min;

      if (continuous) return _this.props.setValue(continuousNextValue);

      var actualNumberSteps = (continuousNextValue - value) / step;
      var minimumSteps = Math.floor(actualNumberSteps);
      var maximumSteps = Math.ceil(actualNumberSteps);
      var useMax = Math.abs(Math.abs(maximumSteps) - Math.abs(actualNumberSteps)) < Math.abs(Math.abs(minimumSteps) - Math.abs(actualNumberSteps));
      var stepsTaken = useMax ? maximumSteps : minimumSteps;
      if (stepsTaken === 0) return;
      var nextValue = stepsTaken * step + value;
      _this.props.setValue(nextValue);
    }, _this.goToMouseLocation = function (_ref) {
      var clientX = _ref.clientX;
      var _this$props3 = _this.props,
          value = _this$props3.value,
          min = _this$props3.min;
      var pixelsPerValue = _this.state.pixelsPerValue;

      var pixelsFromMin = (value - min) * (pixelsPerValue || 0);
      var cursorXAtMin = _this.state.cursorXAtMin;

      if (cursorXAtMin === null) {
        _this.setState({ cursorXAtMin: clientX - pixelsFromMin });
      }
      var cursorPastMin = clientX - cursorXAtMin;
      _this.handleDrag(cursorPastMin);
    }, _this.handleClick = function (_ref2) {
      var clientX = _ref2.clientX;

      if (_this.props.disabled) return;
      var cursorXAtMin = _this.state.cursorXAtMin;

      var cursorPastMin = clientX - cursorXAtMin;
      _this.handleDrag(cursorPastMin);
    }, _this.enableFocus = function () {
      return _this.setState({ focused: true });
    }, _this.disableFocus = function () {
      return _this.setState({ focused: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SliderTrackComponent.prototype.render = function render() {
    var _props = this.props,
        value = _props.value,
        min = _props.min,
        disabled = _props.disabled;
    var _state = this.state,
        pixelsPerValue = _state.pixelsPerValue,
        valuePerPixel = _state.valuePerPixel,
        focused = _state.focused,
        width = _state.width;

    var haveMeasuredWidth = typeof pixelsPerValue === 'number' && typeof valuePerPixel === 'number';
    var pixelsFromMin = (value - min) * (pixelsPerValue || 0);
    var atMin = min === value;
    return _react2.default.createElement(
      'div',
      {
        onClick: this.handleClick,
        ref: this.setTrack,
        className: this.props.className + ' smc-slider-track-wrapper'
      },
      _react2.default.createElement(
        _Trackline2.default,
        {
          disabled: disabled,
          focused: focused,
          atMin: atMin
        },
        haveMeasuredWidth && [_react2.default.createElement(
          _ValueTrack2.default,
          { width: pixelsFromMin, key: 'slider-track-value-track' },
          _react2.default.createElement(_TrackValue2.default, { disabled: disabled, width: width })
        ), _react2.default.createElement(_SliderThumb2.default, {
          increment: this.props.increment,
          decrement: this.props.decrement,
          handleMouseMove: this.handleClick,
          disabled: this.props.disabled,
          atMin: atMin,
          key: 'slider-track-slider-thumb'
        })]
      )
    );
  };

  return SliderTrackComponent;
}(_react.PureComponent);

var SliderTrack = (0, _styledComponents2.default)(SliderTrackComponent)(_templateObject, function (props) {
  return props.theme.slider.sizes.clickableHeight;
}, function (props) {
  return props.disabled ? 'auto' : 'pointer';
});

exports.default = SliderTrack;
module.exports = exports['default'];