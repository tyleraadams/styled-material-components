'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  cursor: inherit;\n  width: 0px;\n  height: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'], ['\n  cursor: inherit;\n  width: 0px;\n  height: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FocusRing = require('./FocusRing');

var _FocusRing2 = _interopRequireDefault(_FocusRing);

var _Thumb = require('./Thumb');

var _Thumb2 = _interopRequireDefault(_Thumb);

var _SliderDisabledWrapper = require('./SliderDisabledWrapper');

var _SliderDisabledWrapper2 = _interopRequireDefault(_SliderDisabledWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderThumbComponent = function (_PureComponent) {
  _inherits(SliderThumbComponent, _PureComponent);

  function SliderThumbComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, SliderThumbComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      navigatingWithKeys: false,
      dragging: false
    }, _this.handleClick = function (event) {
      event.stopPropagation();
      if (_this.props.disabled) return;
      _this.thumb && _this.thumb.focus();
    }, _this.onMouseDown = function () {
      if (_this.props.disabled) return;
      _this.setState({ dragging: true });
      document.addEventListener('mousemove', _this.props.handleMouseMove);
      document.addEventListener('mouseup', _this.onMouseUp);
    }, _this.onMouseUp = function () {
      if (_this.props.disabled) return;
      _this.setState({ dragging: false });
      document.removeEventListener('mousemove', _this.props.handleMouseMove);
      document.removeEventListener('mouseup', _this.onMouseUp);
    }, _this.onKeyDown = function (event) {
      if (_this.props.disabled) return;
      var keyCode = event.keyCode;
      // left or down

      if (keyCode === 37 || keyCode === 40) {
        _this.enableKeys(_this.props.decrement);
      }
      // right or up
      if (keyCode === 39 || keyCode === 38) {
        _this.enableKeys(_this.props.increment);
      }
    }, _this.enableKeys = function (cb) {
      return _this.setState({ navigatingWithKeys: true }, cb);
    }, _this.getThumb = function (ref) {
      _this.thumb = ref;
    }, _this.handleBlur = function () {
      _this.setState({ navigatingWithKeys: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SliderThumbComponent.prototype.render = function render() {
    var _props = this.props,
        atMin = _props.atMin,
        disabled = _props.disabled;
    var _state = this.state,
        navigatingWithKeys = _state.navigatingWithKeys,
        dragging = _state.dragging;

    return _react2.default.createElement(
      'div',
      { ref: this.getThumb, className: this.props.className },
      _react2.default.createElement(
        _SliderDisabledWrapper2.default,
        { disabled: disabled, dragging: dragging },
        _react2.default.createElement(
          _Thumb2.default,
          {
            tabIndex: '1',
            className: 'styled-material-thumb',
            onMouseDown: this.onMouseDown,
            onClick: this.handleClick,
            onKeyDown: this.onKeyDown,
            onBlur: this.handleBlur,
            dragging: dragging,
            atMin: atMin,
            disabled: disabled
          },
          _react2.default.createElement(_FocusRing2.default, { navigatingWithKeys: navigatingWithKeys, atMin: atMin })
        )
      )
    );
  };

  return SliderThumbComponent;
}(_react.PureComponent);

var SliderThumb = (0, _styledComponents2.default)(SliderThumbComponent)(_templateObject);

exports.default = SliderThumb;
module.exports = exports['default'];