'use strict';

exports.__esModule = true;
exports.Portal = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Overlay = require('./Overlay');

var _Shift = require('./Shift');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var smcPortal = void 0;

var Portal = exports.Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      portalMounted: false,
      open: false,
      overflowY: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open && !prevState.open) {
      // if user has set a body style grabbing it here
      // so we don't override what they were using
      var overflowStyle = document.body.style.overflowY;
      document.body.style.overflowY = 'hidden';
      return { open: nextProps.open, overflowY: overflowStyle };
    } else if (!nextProps.open && prevState.open) {
      document.body.style.overflowY = prevState.overflowY;
      return { open: nextProps.open };
    }

    return null;
  };

  Portal.prototype.componentDidMount = function componentDidMount() {
    if (!smcPortal) {
      smcPortal = document.createElement('div');
      smcPortal.id = 'smc-portal';
      smcPortal.className = 'smc-portal';
      document.body.appendChild(smcPortal);
    }

    this.el = document.createElement('div');
    this.el.className = 'smc-portal-instance';
    smcPortal.appendChild(this.el);
    // Triggering a re-render is purposeful because of the nature
    // of portals. The first render and componentDidMount will happen
    // at the same time. this.el can be undefined at render. So
    // we call this.setState in componentDidMount after this.el has
    // been defined and the dom node has been inserted.
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      portalMounted: true
    });
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    smcPortal && smcPortal.removeChild(this.el);
  };

  Portal.prototype.render = function render() {
    if (!this.state.portalMounted) return null;
    var PortalContainer = this.props.shift ? _Shift.Shift : _Overlay.Overlay;

    return (0, _reactDom.createPortal)(_react2.default.createElement(
      PortalContainer,
      {
        className: this.props.className,
        direction: this.props.attachment,
        open: this.props.open,
        onClick: this.props.onRequestClose },
      this.props.renderContents()
    ), this.el);
  };

  return Portal;
}(_react.Component);

Portal.defaultProps = {
  shift: false,
  direction: 'left'
};