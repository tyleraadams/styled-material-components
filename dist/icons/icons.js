'use strict';

exports.__esModule = true;
exports.Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', ';\n'], ['\n  ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ArrowBackPath = require('./ArrowBackPath');

var _ArrowDropDownPath = require('./ArrowDropDownPath');

var _ArrowForwardPath = require('./ArrowForwardPath');

var _ArrowUpwardPath = require('./ArrowUpwardPath');

var _BookmarkPath = require('./BookmarkPath');

var _ClosePath = require('./ClosePath');

var _FileDownloadPath = require('./FileDownloadPath');

var _InfoOutlinePath = require('./InfoOutlinePath');

var _KeyboardArrowDownPath = require('./KeyboardArrowDownPath');

var _KeyboardArrowLeftPath = require('./KeyboardArrowLeftPath');

var _KeyboardArrowRightPath = require('./KeyboardArrowRightPath');

var _KeyboardArrowUpPath = require('./KeyboardArrowUpPath');

var _PinDropPath = require('./PinDropPath');

var _PrintPath = require('./PrintPath');

var _MenuPath = require('./MenuPath');

var _SearchPath = require('./SearchPath');

var _StarBorderPath = require('./StarBorderPath');

var _StarHalfPath = require('./StarHalfPath');

var _StarPath = require('./StarPath');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DEFAULT_FILL = 'rgb(0, 0, 0)';
var DEFAULT_SIZE = 24;

var iconPaths = {
  arrow_back: _ArrowBackPath.ArrowBackPath,
  arrow_drop_down: _ArrowDropDownPath.ArrowDropDownPath,
  arrow_forward: _ArrowForwardPath.ArrowForwardPath,
  bookmark: _BookmarkPath.BookmarkPath,
  close: _ClosePath.ClosePath,
  file_download: _FileDownloadPath.FileDownloadPath,
  info_outline: _InfoOutlinePath.InfoOutlinePath,
  keyboard_arrow_down: _KeyboardArrowDownPath.KeyboardArrowDownPath,
  keyboard_arrow_left: _KeyboardArrowLeftPath.KeyboardArrowLeftPath,
  keyboard_arrow_right: _KeyboardArrowRightPath.KeyboardArrowRightPath,
  keyboard_arrow_up: _KeyboardArrowUpPath.KeyboardArrowUpPath,
  pin_drop: _PinDropPath.PinDropPath,
  print: _PrintPath.PrintPath,
  menu: _MenuPath.MenuPath,
  search: _SearchPath.SearchPath,
  star_border: _StarBorderPath.StarBorderPath,
  star_half: _StarHalfPath.StarHalfPath,
  star: _StarPath.StarPath,
  upward_arrow: _ArrowUpwardPath.ArrowUpwardPath
};

var getChildren = function getChildren(icon) {
  if (!icon) return null;
  var Path = iconPaths[icon];
  if (Path) return React.createElement(Path, null);
  // eslint-disable-next-line no-console
  console.warn('You have passed icon prop ' + icon + '. This does not correspond to\n      any icons currently in the styled-material-components library. Icons names\n      should be in lower snake case. If you have passed a valid icon name in\n      lower snake case, we may not have this icon in styled-material-components\n      yet, but would welcome a PR introducing it :)');
  return null;
};

var IconComponent = function IconComponent(props) {
  return React.createElement(
    'svg',
    {
      className: props.className,
      'data-smc': 'Icon',
      fill: props.fill || DEFAULT_FILL,
      height: props.size || DEFAULT_SIZE,
      onClick: props.onClick,
      viewBox: ' 0 0 24 24',
      width: props.size || DEFAULT_SIZE,
      xlmns: 'http://www.w3.org/2000/svg'
    },
    props.children || getChildren(props.icon)
  );
};

var Icon = exports.Icon = (0, _styledComponents2.default)(IconComponent)(_templateObject, function (props) {
  return props.onClick && 'cursor: pointer';
});