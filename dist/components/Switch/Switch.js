'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  position: absolute;\n'], ['\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  position: absolute;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SwitchTrack = require('./SwitchTrack');

var _SwitchTrack2 = _interopRequireDefault(_SwitchTrack);

var _SwitchThumb = require('./SwitchThumb');

var _SwitchThumb2 = _interopRequireDefault(_SwitchThumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchComponent = function (_PureComponent) {
  _inherits(SwitchComponent, _PureComponent);

  function SwitchComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, SwitchComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      on: true
    }, _this.handleOnClick = function () {
      if (!_this.props.disabled) {
        _this.setState(function (prevState) {
          return {
            on: !prevState.on
          };
        });
        _this.props.onChange && _this.props.onChange();
      }
    }, _this.acceptableProps = {
      light: _this.props.light,
      dark: _this.props.dark,
      raised: _this.props.raised,
      disabled: _this.props.disabled
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SwitchComponent.prototype.render = function render() {
    return _react2.default.createElement(
      _SwitchTrack2.default,
      _extends({}, this.acceptableProps, this.state),
      _react2.default.createElement(_SwitchThumb2.default, _extends({}, this.acceptableProps, this.state, { onClick: this.handleOnClick }))
    );
  };

  return SwitchComponent;
}(_react.PureComponent);

var Switch = (0, _styledComponents2.default)(SwitchComponent)(_templateObject);

exports.default = Switch;
module.exports = exports['default'];