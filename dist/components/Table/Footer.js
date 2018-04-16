'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n'], ['\n  position: absolute;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  svg {\n    ', ';\n  }\n  height: 24px;\n  width: 24px;\n  padding: 0px;\n  min-width: 24px;\n  margin-left: 24px;\n'], ['\n  svg {\n    ', ';\n  }\n  height: 24px;\n  width: 24px;\n  padding: 0px;\n  min-width: 24px;\n  margin-left: 24px;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  height: 48px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 12px;\n  color: rgba(0, 0, 0, .54);\n  padding-right: 14px;\n\n  >.current-page {\n    margin-right: 8px;\n    margin-left: 32px;\n  }\n\n  >.rowsPerPage {\n    cursor: pointer;\n    width: 40px;\n    text-align: right;\n  }\n'], ['\n  height: 48px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 12px;\n  color: rgba(0, 0, 0, .54);\n  padding-right: 14px;\n\n  >.current-page {\n    margin-right: 8px;\n    margin-left: 32px;\n  }\n\n  >.rowsPerPage {\n    cursor: pointer;\n    width: 40px;\n    text-align: right;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _icons = require('../../icons');

var _Menu = require('../Menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FooterIcon = _icons.Icon.extend.attrs({
  cursor: 'pointer',
  fill: 'rgba(0, 0, 0, .54)'
})(_templateObject);

var StandAloneMenu = _Menu.Menu.extend(_templateObject2);

var PaginationButton = _Button2.default.extend(_templateObject3, function (props) {
  return props.disabled && 'fill: #eee';
});

/*
 * TODO Use real menu to make rows per page editable
 */

var FooterComponent = function (_PureComponent) {
  _inherits(FooterComponent, _PureComponent);

  function FooterComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, FooterComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      menuOpen: false,
      // why is this in state?
      // because it changes and we want a reference of the first value, rather than the change
      rowsPerPage: _this.props.rowsPerPage
    }, _this.rowSelection = _this.props.rowsDropDown ? _this.props.rowsDropDown.map(function (item) {
      return { text: item, onClick: function onClick() {
          return _this.handleSelect(item);
        } };
    }) : [{
      text: _this.state.rowsPerPage,
      onClick: function onClick() {
        return _this.handleSelect(_this.state.rowsPerPage);
      }
    }, {
      text: _this.state.rowsPerPage * 3,
      onClick: function onClick() {
        return _this.handleSelect(_this.state.rowsPerPage * 3);
      }
    }, // Fibonacci?
    {
      text: _this.state.rowsPerPage * 5,
      onClick: function onClick() {
        return _this.handleSelect(_this.state.rowsPerPage * 5);
      }
    }, {
      text: _this.state.rowsPerPage * 8,
      onClick: function onClick() {
        return _this.handleSelect(_this.state.rowsPerPage * 8);
      }
    }], _this.handleClick = function () {
      _this.setState({ menuOpen: !_this.state.menuOpen });
    }, _this.handleSelect = function (selectedItem) {
      _this.props.handleRowsPerPageChange(selectedItem);
      _this.setState({ menuOpen: false });
    }, _this.handleClose = function () {
      _this.setState({ menuOpen: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  FooterComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // go back a page if all the items can be contained.
    if (Math.ceil(nextProps.totalDataPoints / nextProps.rowsPerPage) < nextProps.currentPage) {
      nextProps.handleBackwardsPagination();
    }
  };

  // rather than on render


  FooterComponent.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        currentPage = _props.currentPage,
        rowsPerPage = _props.rowsPerPage,
        totalDataPoints = _props.totalDataPoints,
        handleBackwardsPagination = _props.handleBackwardsPagination,
        handleForwardPagination = _props.handleForwardPagination;


    var onFirstPage = currentPage === 1;
    var totalPages = Math.ceil(totalDataPoints / rowsPerPage);
    var onLastPage = currentPage === totalPages;
    var lastValueFittingOnPage = currentPage * rowsPerPage;
    var firstSeen = lastValueFittingOnPage - rowsPerPage + 1;
    var lastSeen = onLastPage ? totalDataPoints : lastValueFittingOnPage;
    return _react2.default.createElement(
      'div',
      { className: 'smc-table-footer ' + className },
      this.rowSelection.length > 0 && _react2.default.createElement(
        _react.Fragment,
        null,
        'Rows per page:',
        _react2.default.createElement(StandAloneMenu, {
          open: this.state.menuOpen,
          menuItems: this.rowSelection
        }),
        _react2.default.createElement(
          'div',
          { onClick: this.handleClick, className: 'rowsPerPage' },
          '' + rowsPerPage
        ),
        _react2.default.createElement(FooterIcon, {
          onClick: this.handleClick,
          icon: 'arrow_drop_down'
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'current-page' },
        firstSeen + '-' + lastSeen + ' of ' + totalDataPoints
      ),
      _react2.default.createElement(
        PaginationButton,
        {
          onClick: handleBackwardsPagination,
          disabled: onFirstPage
        },
        _react2.default.createElement(FooterIcon, { icon: 'keyboard_arrow_left' })
      ),
      _react2.default.createElement(
        PaginationButton,
        {
          onClick: handleForwardPagination,
          disabled: onLastPage
        },
        _react2.default.createElement(FooterIcon, { icon: 'keyboard_arrow_right' })
      )
    );
  };

  return FooterComponent;
}(_react.PureComponent);

var Footer = (0, _styledComponents2.default)(FooterComponent)(_templateObject4);

exports.default = Footer;
module.exports = exports['default'];