'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 70%;\n  max-width: 865px;\n  ', ';\n'], ['\n  width: 70%;\n  max-width: 865px;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  > .smc-dialog-surface {\n    display: flex;\n    flex-direction: column;\n    ', ';\n    border-radius: 2px;\n    background-color: #fff;\n  }\n\n  > .smc-fullscreen-dialog {\n    overflow: hidden;\n    transition: transform 0.3s;\n    will-change: transform;\n\n    &.left {\n      left: 0;\n      transform: translateX(-107%);\n    }\n\n    &.right {\n      right: 0;\n      transform: translateX(107%);\n    }\n\n    &.open {\n      transition: transform 0.3s;\n      transform: none;\n    }\n  }\n'], ['\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  > .smc-dialog-surface {\n    display: flex;\n    flex-direction: column;\n    ', ';\n    border-radius: 2px;\n    background-color: #fff;\n  }\n\n  > .smc-fullscreen-dialog {\n    overflow: hidden;\n    transition: transform 0.3s;\n    will-change: transform;\n\n    &.left {\n      left: 0;\n      transform: translateX(-107%);\n    }\n\n    &.right {\n      right: 0;\n      transform: translateX(107%);\n    }\n\n    &.open {\n      transition: transform 0.3s;\n      transform: none;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _elevation = require('../../mixins/elevation');

var _elevation2 = _interopRequireDefault(_elevation);

var _Portal = require('../Portal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * The dialog is controlled by this.props.open, *but* the dialog also closes when
 * the user clicks out of it. Because of that, the dialog's open/shut status is
 * actually controlled in the DialogComponent's state
 */
var DialogComponent = function (_React$Component) {
  _inherits(DialogComponent, _React$Component);

  function DialogComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, DialogComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleKeyDown = function (event) {
      if (event.keyCode === 27) {
        // esc
        _this.props.onClose && _this.props.onClose();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DialogComponent.prototype.componentDidMount = function componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  };

  DialogComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  };

  DialogComponent.prototype.render = function render() {
    var _this2 = this;

    var fullscreenDialogClass = (0, _classnames2.default)(this.props.className, 'smc-fullscreen-dialog', {
      open: this.props.open,
      left: this.props.attachment === 'left',
      right: this.props.attachment === 'right'
    });

    return _react2.default.createElement(_Portal.Portal, {
      open: this.props.open,
      renderContents: function renderContents() {
        return _react2.default.createElement(
          'div',
          { className: _this2.props.className + ' smc-dialog', onClick: _this2.props.onClose, onKeyDown: _this2.handleKeyDown },
          _react2.default.createElement(
            'div',
            { className: 'smc-dialog-surface ' + (_this2.props.fullscreen ? fullscreenDialogClass : ''), onClick: function onClick(e) {
                return e.stopPropagation();
              } },
            _this2.props.children
          )
        );
      }
    });
  };

  return DialogComponent;
}(_react2.default.Component);

var notFullScreenStyles = (0, _styledComponents.css)(_templateObject, (0, _elevation2.default)(24));

exports.default = (0, _styledComponents2.default)(DialogComponent)(_templateObject2, function (_ref) {
  var fullscreen = _ref.fullscreen;
  return !fullscreen && notFullScreenStyles;
});


DialogComponent.defaultProps = {
  open: false,
  attachment: 'left',
  fullscreen: false
};
module.exports = exports['default'];