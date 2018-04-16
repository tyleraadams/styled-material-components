'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: 15px;\n  display: flex;\n  justify-content: ', ';\n\n  > .sortButton {\n    vertical-align: center;\n    height: 15px;\n    width: 15px;\n    cursor: pointer;\n    border-radius: 7.5px;\n    margin-right: 5px;\n    fill: ', ';\n    transform-origin: center;\n    transition: 0.3s;\n  }\n\n  > .sortButton:hover {\n    background-color: rgba(0, 0, 0, .04);\n  }\n\n  > .rotate {\n    transform: rotate(180deg);\n  }\n'], ['\n  height: 15px;\n  display: flex;\n  justify-content: ', ';\n\n  > .sortButton {\n    vertical-align: center;\n    height: 15px;\n    width: 15px;\n    cursor: pointer;\n    border-radius: 7.5px;\n    margin-right: 5px;\n    fill: ', ';\n    transform-origin: center;\n    transition: 0.3s;\n  }\n\n  > .sortButton:hover {\n    background-color: rgba(0, 0, 0, .04);\n  }\n\n  > .rotate {\n    transform: rotate(180deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  ', ';\n  display: inline-block;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 3px;\n  border-spacing: 0;\n  border: 0px;\n\n  > .smc-table-search {\n    border-bottom: 1px solid rgba(225, 225, 225, 1);\n  }\n\n  > .smc-table-header {\n    padding: 0 14px;\n  }\n\n  > .smc-table-table {\n    border-collapse: collapse;\n\n    .smc-table-head-checkbox {\n      padding-top: 6px;\n      float: left;\n    }\n\n    tr {\n      border: 0px;\n      border-bottom: 1px solid rgba(225, 225, 225, 1);\n    }\n\n    ', ';\n    border-spacing: 0;\n  }\n'], ['\n  ', ';\n  display: inline-block;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 3px;\n  border-spacing: 0;\n  border: 0px;\n\n  > .smc-table-search {\n    border-bottom: 1px solid rgba(225, 225, 225, 1);\n  }\n\n  > .smc-table-header {\n    padding: 0 14px;\n  }\n\n  > .smc-table-table {\n    border-collapse: collapse;\n\n    .smc-table-head-checkbox {\n      padding-top: 6px;\n      float: left;\n    }\n\n    tr {\n      border: 0px;\n      border-bottom: 1px solid rgba(225, 225, 225, 1);\n    }\n\n    ', ';\n    border-spacing: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Datum = require('./Datum');

var _Datum2 = _interopRequireDefault(_Datum);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _naturalSort = require('./naturalSort');

var _naturalSort2 = _interopRequireDefault(_naturalSort);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

var _Checkbox = require('../Checkbox');

var _icons = require('../../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/*
 * The user of the table is responsible for passing in a unique key for each
 * object in props.data
 *
 *
 * TODO:
 * - column name hover
 * - long header titles
 * - inline text editing
 * - inline menus
 * - alternate headers
 */

var TitleSortContainer = _styledComponents2.default.div(_templateObject, function (_ref) {
  var numerical = _ref.numerical;
  return numerical ? 'flex-end' : 'flex-start';
}, function (props) {
  return props.theme.textColors.secondary;
});

var incrementCurrentPage = function incrementCurrentPage(_ref2) {
  var currentPage = _ref2.currentPage;
  return {
    currentPage: currentPage + 1
  };
};
var decrementCurrentPage = function decrementCurrentPage(_ref3) {
  var currentPage = _ref3.currentPage;
  return {
    currentPage: currentPage - 1
  };
};

var Table = function (_PureComponent) {
  _inherits(Table, _PureComponent);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.selectAll = function () {
      var totalDataPoints = _this.props.totalDataPoints || _this.state.mutatedData.length;
      var fakingPagination = totalDataPoints > _this.state.mutatedData.length;
      var currentPage = _this.props.currentPage || _this.state.currentPage;
      var data = void 0;
      if (fakingPagination || totalDataPoints <= _this.state.rowsPerPage) {
        data = _this.state.mutatedData;
      } else {
        data = _this.state.mutatedData.slice((currentPage - 1) * _this.state.rowsPerPage, currentPage * _this.state.rowsPerPage);
      }
      var itemsToSet = _extends({}, _this.state.selectedItems);
      for (var i = 0; i < data.length; i += 1) {
        var item = data[i];
        !_this.state.selectedItems[item.key] && _this.props.onCheck && _this.props.onCheck(item);
        itemsToSet[item.key] = true;
      }
      _this.setState({
        selectedItems: itemsToSet
      });
    };

    _this.toggleIndividualSelect = function (datum) {
      var itemsToSet = _extends({}, _this.state.selectedItems);
      if (itemsToSet[datum.key]) {
        _this.props.onUncheck(datum);
        delete itemsToSet[datum.key];
      } else {
        _this.props.onCheck(datum);
        itemsToSet[datum.key] = true;
      }
      _this.setState({
        selectedItems: itemsToSet
      });
    };

    _this.updateWithNewProps = function (input) {
      var newData = [].concat(input);
      var mutatedData = void 0;
      var currentSort = _this.state.sortedBy;
      // if we have a key to sortBy, do it:
      if (currentSort) {
        // grab descending from state, as it shouldn't have to change here
        var sorter = (0, _naturalSort2.default)({ desc: _this.state.descending });
        // clone
        mutatedData = newData.sort(function (a, b) {
          return sorter(a[currentSort], b[currentSort]);
        });
      } else {
        // else update with new data, unsorted
        mutatedData = newData;
      }
      _this.setState({ mutatedData: mutatedData });
    };

    _this.unselectAll = function () {
      // why loop through the object rather than
      // just setting it to {}

      // we need to call props.onUncheck for each!
      var totalDataPoints = _this.props.totalDataPoints || _this.state.mutatedData.length;
      var fakingPagination = totalDataPoints > _this.state.mutatedData.length;
      var currentPage = _this.props.currentPage || _this.state.currentPage;
      var data = void 0;
      if (fakingPagination || totalDataPoints <= _this.state.rowsPerPage) {
        data = _this.state.mutatedData;
      } else {
        data = _this.state.mutatedData.slice((currentPage - 1) * _this.state.rowsPerPage, currentPage * _this.state.rowsPerPage);
      }
      var itemsToSet = _extends({}, _this.state.selectedItems);
      for (var i = 0; i < data.length; i += 1) {
        var item = data[i];
        _this.props.onUncheck && _this.props.onUncheck(item);
        delete itemsToSet[item.key];
      }
      _this.setState({
        selectedItems: itemsToSet
      });
    };

    _this.sortBy = function (key) {
      var descending = _this.state.descending;
      var mutatedData = [].concat(_this.state.mutatedData);

      if (key === _this.state.sortedBy) {
        // flip descending or ascending
        if (_this.state.descending) {
          descending = false;
        } else {
          descending = true;
        }
      } else {
        // default, new sort to descending
        descending = true;
      }

      // Run either custom or built in sorter
      if (_this.props.onSort) {
        _this.props.onSort(key);
      } else {
        var sorter = (0, _naturalSort2.default)({ desc: descending });
        mutatedData.sort(function (a, b) {
          return sorter(a[key], b[key]);
        });
      }

      _this.setState({ descending: descending, mutatedData: mutatedData, sortedBy: key });
    };

    _this.handleBackwardsPagination = function () {
      if (_this.props.handleBackwardsPagination) {
        _this.props.handleBackwardsPagination();
      }
      _this.setState(decrementCurrentPage);
    };

    _this.handleForwardPagination = function () {
      if (_this.props.handleForwardPagination) {
        _this.props.handleForwardPagination();
      }
      _this.setState(incrementCurrentPage);
    };

    _this.determineSelected = function (superset, subset) {
      if (subset.length === 0) {
        return false;
      }
      return subset.every(function (value) {
        return superset.indexOf(value) >= 0;
      });
    };

    _this.changeRows = function (rowsPerPage) {
      _this.props.onRowChange && _this.props.onRowChange(rowsPerPage);
      _this.setState({ rowsPerPage: rowsPerPage });
    };

    _this.state = {
      selectedItems: {},
      mutatedData: [].concat(_this.props.data),
      sortedBy: null,
      descending: false,
      currentPage: _this.props.currentPage || 1,
      rowsPerPage: _this.props.rowsPerPage || 10
    };
    return _this;
  }

  Table.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // added in some super cool checks
    // first we see if the ref is different
    // then we see if the length is different
    // then we deep diff the two

    // this is to catch weird usage of the comp
    // ie: pushing or popping from an array

    if (this.props.data !== nextProps.data || this.props.data.length !== nextProps.data.length || !(0, _lodash2.default)(this.props.data, nextProps.data)) {
      this.updateWithNewProps(nextProps.data);
    }
  };

  Table.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        hasCheckboxes = _props.hasCheckboxes,
        fields = _props.fields,
        rowsDropDown = _props.rowsDropDown;
    var _state = this.state,
        rowsPerPage = _state.rowsPerPage,
        mutatedData = _state.mutatedData,
        selectedItems = _state.selectedItems;

    var totalDataPoints = this.props.totalDataPoints || mutatedData.length;
    var currentPage = this.props.currentPage || this.state.currentPage;
    var fakingPagination = totalDataPoints > mutatedData.length;
    var showAllData = fakingPagination || totalDataPoints <= rowsPerPage;
    var rowsToShow = showAllData ? mutatedData : mutatedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    var extraRows = 0;
    if (!showAllData || fakingPagination) {
      extraRows = Math.max(0, rowsPerPage - rowsToShow.length);
    }
    var sort = this.props.sortedBy || this.state.sortedBy;
    var descending = this.props.descending || this.state.descending;

    var currentSelectionKeys = Object.keys(selectedItems);
    var currentPageKeys = rowsToShow.map(function (item) {
      return item.key;
    });
    var selectedAllActive = this.determineSelected(currentSelectionKeys, currentPageKeys);

    return _react2.default.createElement(
      'div',
      { className: 'smc-table-wrapper ' + this.props.className },
      this.props.header && _react2.default.createElement(
        _Header2.default,
        null,
        this.props.header
      ),
      this.props.onSearch && _react2.default.createElement(
        'div',
        { className: 'smc-table-search' },
        _react2.default.createElement(_Search2.default, { onSearch: this.props.onSearch })
      ),
      _react2.default.createElement(
        'table',
        { className: 'smc-table-table' },
        _react2.default.createElement(
          'thead',
          { className: 'smc-table-head' },
          _react2.default.createElement(
            _Row2.default,
            { header: true },
            hasCheckboxes && _react2.default.createElement(
              'th',
              { onClick: selectedAllActive ? this.unselectAll : this.selectAll, className: 'smc-table-head-checkbox' },
              _react2.default.createElement(_Checkbox.Checkbox, {
                checked: selectedAllActive
              })
            ),
            fields.map(function (_ref4, i) {
              var label = _ref4.label,
                  numerical = _ref4.numerical,
                  key = _ref4.key,
                  sortable = _ref4.sortable;
              return _react2.default.createElement(
                _Title2.default,
                {
                  sortedBy: _this2.state.sortedBy === key,
                  key: label,
                  column: key,
                  numerical: numerical,
                  first: i === 0,
                  last: i === fields.length - 1
                },
                _react2.default.createElement(
                  TitleSortContainer,
                  { numerical: numerical },
                  sortable && _react2.default.createElement(_icons.ArrowUpwardIcon, {
                    className:
                    // sorry for this mess
                    sort === key && descending ? 'sortButton rotate' : 'sortButton',
                    onClick: function onClick() {
                      return _this2.sortBy(key);
                    }
                  }),
                  label
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          (fakingPagination || totalDataPoints <= rowsPerPage ? mutatedData : mutatedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)).map(function (datum) {
            return _react2.default.createElement(
              _Row2.default,
              { selected: Boolean(_this2.state.selectedItems[datum.key]), key: 'row_' + datum.key },
              hasCheckboxes && _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_Checkbox.Checkbox, {
                  checked: Boolean(_this2.state.selectedItems[datum.key]),
                  onChange: function onChange() {
                    return _this2.toggleIndividualSelect(datum);
                  }
                })
              ),
              fields.map(function (_ref5, i) {
                var key = _ref5.key,
                    numerical = _ref5.numerical;
                return _react2.default.createElement(
                  _Datum2.default,
                  {
                    key: '{' + datum.key + '_' + key + '}',
                    className: datum.className,
                    column: key,
                    numerical: numerical,
                    first: i === 0,
                    last: i === fields.length - 1
                  },
                  datum[key]
                );
              })
            );
          }),
          Array(extraRows).fill('').map(function (val, j) {
            return (
              // eslint-disable-next-line react/no-array-index-key
              _react2.default.createElement(
                _Row2.default,
                { key: 'faux-data-' + j },
                fields.map(function (_ref6, i) {
                  var key = _ref6.key,
                      numerical = _ref6.numerical;
                  return _react2.default.createElement(_Datum2.default, {
                    key: 'faux-data_' + key + '}',
                    column: key,
                    numerical: numerical,
                    first: i === 0,
                    last: i === fields.length - 1
                  });
                })
              )
            );
          })
        )
      ),
      _react2.default.createElement(_Footer2.default, {
        rowsDropDown: rowsDropDown,
        currentPage: currentPage,
        rowsPerPage: rowsPerPage,
        handleRowsPerPageChange: this.changeRows,
        totalDataPoints: totalDataPoints,
        handleBackwardsPagination: this.handleBackwardsPagination,
        handleForwardPagination: this.handleForwardPagination
      })
    );
  };

  return Table;
}(_react.PureComponent);

exports.default = (0, _styledComponents2.default)(Table)(_templateObject2, function (props) {
  return props.fullWidth ? 'width: 100%' : '';
}, function (props) {
  return props.fullWidth ? 'width: 100%' : 'width: auto';
});
module.exports = exports['default'];