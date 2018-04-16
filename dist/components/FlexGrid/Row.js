'use strict';

exports.__esModule = true;
exports.Row = exports.RowConsumer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', ';\n'], ['\n  ', ';\n']);

exports.withRowState = withRowState;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _flex = require('../../mixins/flex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Row
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Brad Decker <bhdecker84@gmail.com|brad@merlinlabs.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description Defines a flex grid row that has props defined for
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * easily setting some common flex styles.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RowContext = (0, _react.createContext)({
  horizontal: 'left',
  vertical: 'middle',
  distribution: null,
  stretch: null
});

/**
 * RowConsumer
 *
 * This part of the context is a component that must have a single child
 * that is a function. This function is called at render with the value
 * defined in the RowProvider as an argument.
 */
var RowConsumer = exports.RowConsumer = RowContext.Consumer;

/**
 * RowProvider
 *
 * This part of thd context is a React Component that sets the values that
 * will be accessible to any RowConsumer within it's tree.
 */
var RowProvider = RowContext.Provider;

var RowComponent = function (_Component) {
  _inherits(RowComponent, _Component);

  function RowComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, RowComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      horizontal: _this.props.horizontal,
      vertical: _this.props.vertical,
      distribution: _this.props.distribution,
      stretch: _this.props.stretch
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // Initial state is inherited from props


  RowComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // Anytime our props of interest change we need to update state
    // This is so that the context is kept up to date.
    var newState = {};
    if (this.props.horizontal !== nextProps.horizontal) {
      newState.horizontal = nextProps.horizontal;
    }
    if (this.props.vertical !== nextProps.vertical) {
      newState.vertical = nextProps.vertical;
    }
    if (this.props.distribution !== nextProps.distribution) {
      newState.distribution = nextProps.distribution;
    }
    if (this.props.stretch !== nextProps.stretch) {
      newState.stretch = nextProps.stretch;
    }
    if (Object.keys(newState).length) this.setState(newState);
  };

  RowComponent.prototype.render = function render() {
    return _react2.default.createElement(
      RowProvider,
      { value: this.state },
      _react2.default.createElement(
        'div',
        { 'data-smc': 'Row', className: this.props.className },
        this.props.children
      )
    );
  };

  return RowComponent;
}(_react.Component);

var Row = exports.Row = (0, _styledComponents2.default)(RowComponent)(_templateObject, function (props) {
  return (0, _flex.rowMixin)(props);
});

function withRowState(WrappedComponent) {
  var ComponentWithRowState = function ComponentWithRowState(props) {
    return _react2.default.createElement(
      RowConsumer,
      null,
      function (rowState) {
        return _react2.default.createElement(WrappedComponent, _extends({}, props, { rowState: rowState }));
      }
    );
  };
  var name = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithRowState.displayName = 'withRowState(' + name + ')';
  return ComponentWithRowState;
}