'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 25px 30px 20px 30px;\n  width: 100%;\n  margin: auto;\n  display: inline-flex;\n  background-color: white;\n  box-sizing: border-box;\n  position: relative;\n\n  ', ' {\n    margin: auto;\n    margin-left: 15px;\n    height: 28px;\n    border-bottom: none;\n    position: relative;\n  }\n\n  ', ' {\n    position: relative;\n    bottom: 0px;\n    margin: auto;\n    height: 28px;\n  }\n'], ['\n  padding: 25px 30px 20px 30px;\n  width: 100%;\n  margin: auto;\n  display: inline-flex;\n  background-color: white;\n  box-sizing: border-box;\n  position: relative;\n\n  ', ' {\n    margin: auto;\n    margin-left: 15px;\n    height: 28px;\n    border-bottom: none;\n    position: relative;\n  }\n\n  ', ' {\n    position: relative;\n    bottom: 0px;\n    margin: auto;\n    height: 28px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _icons = require('../../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SearchComponent = function SearchComponent(_ref) {
  var className = _ref.className,
      onSearch = _ref.onSearch;
  return _react2.default.createElement(
    'div',
    { className: 'smc-search-container ' + className },
    _react2.default.createElement(
      'div',
      { className: 'smc-search-icon-container' },
      _react2.default.createElement(_icons.SearchIcon, { fill: 'black' })
    ),
    _react2.default.createElement(_TextField2.default, {
      type: 'search',
      hintText: 'Search Term',
      fullWidth: true,
      onChange: onSearch
    })
  );
};

var Search = (0, _styledComponents2.default)(SearchComponent)(_templateObject, _TextField2.default, _icons.SearchIcon);

exports.default = Search;
module.exports = exports['default'];