'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n'], ['\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SliderTrack = require('./SliderTrack');

var _SliderTrack2 = _interopRequireDefault(_SliderTrack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getAverage = function getAverage(min, max) {
  return Math.round((min + max) / 2);
};

var valueIsValid = function valueIsValid(value, min, max) {
  return typeof value === 'number' && value >= min && value <= max;
};

var DEFAULT_MIN = 0;
var DEFAULT_MAX = 100;
var DEFAULT_STEP = 1;

var SliderComponent = function (_PureComponent) {
  _inherits(SliderComponent, _PureComponent);

  function SliderComponent(props) {
    _classCallCheck(this, SliderComponent);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var min = props.min,
        max = props.max,
        initialValue = props.initialValue,
        step = props.step;

    var actualMin = typeof min === 'number' ? min : DEFAULT_MIN;
    var actualMax = typeof max === 'number' ? max : DEFAULT_MAX;
    if (actualMax <= actualMin) throw new Error('Slider minimum ' + actualMin + ' exceeds maximum ' + actualMax);
    var value = typeof initialValue === 'number' ? initialValue : getAverage(actualMin, actualMax);
    if (value < actualMin) throw new Error('Slider value ' + value + ' is less than minimum ' + actualMin);
    if (value > actualMax) throw new Error('Slider value ' + value + ' exceeds maximum ' + actualMax);
    if (step === 0) throw new Error('Slider step cannot be 0');
    var actualStep = step || DEFAULT_STEP;
    if (typeof actualStep !== 'number') throw new Error('Provided step ' + step + ' is not a number');
    _this.state = {
      min: actualMin,
      max: actualMax,
      step: Math.abs(actualStep),
      value: value
    };
    return _this;
  }

  SliderComponent.prototype.render = function render() {
    var _state = this.state,
        min = _state.min,
        max = _state.max,
        step = _state.step;
    var continuous = this.props.continuous;

    var propsValue = this.props.value;
    var stateValue = this.state.value;
    var valueFromCorrectSource = valueIsValid(propsValue) ? propsValue : stateValue;
    return _react2.default.createElement(
      'div',
      { className: this.props.className + ' smc-slider' },
      _react2.default.createElement(_SliderTrack2.default, {
        value: valueFromCorrectSource,
        min: min,
        max: max,
        step: step,
        continuous: Boolean(continuous),
        increment: this.increment,
        decrement: this.decrement,
        setValue: this.setValue,
        disabled: this.props.disabled
      })
    );
  };

  return SliderComponent;
}(_react.PureComponent);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.increment = function () {
    var value = typeof _this2.props.value === 'number' ? _this2.props.value : _this2.state.value;
    var step = _this2.state.step;

    _this2.setValue(value + step);
  };

  this.decrement = function () {
    var value = typeof _this2.props.value === 'number' ? _this2.props.value : _this2.state.value;
    var step = _this2.state.step;

    _this2.setValue(value - step);
  };

  this.setValue = function (value) {
    var _state2 = _this2.state,
        min = _state2.min,
        max = _state2.max;

    var actualValue = value;
    if (value < min) actualValue = min;
    if (value > max) actualValue = max;
    if (_this2.props.handleValueChange) {
      _this2.props.handleValueChange(actualValue);
    }
    _this2.setState({ value: actualValue });
  };
};

var Slider = (0, _styledComponents2.default)(SliderComponent)(_templateObject);

exports.default = Slider;
module.exports = exports['default'];