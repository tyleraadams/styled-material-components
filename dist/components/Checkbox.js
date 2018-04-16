'use strict';

exports.__esModule = true;
exports.IndeterminateMark = exports.CheckMark = exports.Box = exports.Checkbox = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  transition: 0.3s;\n  display: inline-flex;\n  position: absolute;\n  left: 11px;\n  top: 11px;\n  bottom: 11px;\n  right: 11px;\n  border: solid 2px\n    ', ';\n  border-radius: 2px;\n  background-color: ', ';\n  align-items: center;\n  justify-content: center;\n'], ['\n  transition: 0.3s;\n  display: inline-flex;\n  position: absolute;\n  left: 11px;\n  top: 11px;\n  bottom: 11px;\n  right: 11px;\n  border: solid 2px\n    ', ';\n  border-radius: 2px;\n  background-color: ', ';\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  opacity: 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  cursor: inherit;\n  margin: 0;\n'], ['\n  position: absolute;\n  opacity: 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  cursor: inherit;\n  margin: 0;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  fill: none;\n  stroke: ', ';\n  width: 100%;\n  height: 100%;\n  stroke-width: 3.12px;\n'], ['\n  fill: none;\n  stroke: ', ';\n  width: 100%;\n  height: 100%;\n  stroke-width: 3.12px;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  transition: 0.3s;\n  height: 2px;\n  width: 14px;\n  background-color: ', ';\n'], ['\n  transition: 0.3s;\n  height: 2px;\n  width: 14px;\n  background-color: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  position: relative;\n  padding: 11px;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  cursor: ', ';\n  :hover::before {\n    transition: 0.3s;\n    opacity: 0.04;\n  }\n  ::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: ', ';\n    opacity: 0;\n    content: \'\';\n  }\n'], ['\n  display: inline-block;\n  position: relative;\n  padding: 11px;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  cursor: ', ';\n  :hover::before {\n    transition: 0.3s;\n    opacity: 0.04;\n  }\n  ::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: ', ';\n    opacity: 0;\n    content: \'\';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Box = _styledComponents2.default.div(_templateObject, function (props) {
  if (props.checked || props.indeterminate) return 'transparent';else if (props.disabled) return props.theme.disabledCheckbox;
  return props.theme.textColors.secondary;
}, function (props) {
  if (props.checked || props.indeterminate) {
    if (props.disabled) return props.theme.disabledCheckbox;else if (props.primary) return props.theme.primary;
    return props.theme.accent;
  }
});

var Input = _styledComponents2.default.input.attrs({
  type: 'checkbox',
  disabled: function disabled(props) {
    return props.disabled;
  }
})(_templateObject2);

var CheckMark = _styledComponents2.default.svg.attrs({
  viewBox: '0 0 24 24',
  children: _react2.default.createElement('path', { d: 'M1.73,12.91 8.1,19.28 22.79,4.59' })
})(_templateObject3, function (props) {
  return props.theme.white;
});

var IndeterminateMark = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.white;
});

var CheckboxComponent = function (_PureComponent) {
  _inherits(CheckboxComponent, _PureComponent);

  function CheckboxComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, CheckboxComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      checked: _this.props.checked || _this.props.default === 'checked' || false,
      indeterminate: _this.props.default === 'indeterminate' || false
    }, _this.handleInputChange = function (e) {
      var checked = e.target.checked;
      _this.setState({ indeterminate: false, checked: checked });

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CheckboxComponent.prototype.render = function render() {
    var _props = this.props,
        primary = _props.primary,
        disabled = _props.disabled,
        checkedProp = _props.checked,
        checkMarkProp = _props.checkMark,
        className = _props.className,
        indeterminateProp = _props.indeterminate,
        indeterminateMarkProp = _props.indeterminateMark,
        value = _props.value,
        id = _props.id;
    // determine if checkbox is controlled or uncontrolled

    var checked = checkedProp !== undefined ? checkedProp : this.state.checked;
    var indeterminate = indeterminateProp !== undefined ? indeterminateProp : this.state.indeterminate;
    // check for CheckMark or IndeterminateMark icons passed as props
    var CheckMarkComponent = checkMarkProp || CheckMark;
    var IndeterminateMarkComponent = indeterminateMarkProp || IndeterminateMark;

    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement(
        Box,
        { primary: primary, checked: checked, disabled: disabled, indeterminate: indeterminate },
        indeterminate && _react2.default.createElement(IndeterminateMarkComponent, null),
        checked && !indeterminate && _react2.default.createElement(CheckMarkComponent, null)
      ),
      _react2.default.createElement(Input, {
        onChange: this.handleInputChange,
        disabled: disabled,
        checked: checked,
        value: value,
        id: id
      })
    );
  };

  return CheckboxComponent;
}(_react.PureComponent);

var Checkbox = (0, _styledComponents2.default)(CheckboxComponent)(_templateObject5, function (props) {
  return !props.disabled && 'pointer';
}, function (props) {
  if (props.disabled) return 'transparent';else if (!props.checked) return props.theme.textColors.secondary;else if (props.primary) return props.theme.primary;
  return props.theme.accent;
});

exports.Checkbox = Checkbox;
exports.Box = Box;
exports.CheckMark = CheckMark;
exports.IndeterminateMark = IndeterminateMark;