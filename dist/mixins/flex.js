'use strict';

exports.__esModule = true;
exports.rowMixin = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n    justify-content: ', ';\n    align-items: ', ';\n  '], ['\n    justify-content: ', ';\n    align-items: ', ';\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  flex-direction: row;\n  height: 100%;\n  ', '\n  ', '\n'], ['\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  flex-direction: row;\n  height: 100%;\n  ', '\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n    position: relative;\n  '], ['\n    position: relative;\n  ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/**
 * computeDirection
 *
 * Styled Mixin for determining how to justify and align the row
 * @param {Object} props               Props provided by the user
 * @param {String} props.horizontal    horizontal positioning ('left'|'center'|'right')
 * @param {String} props.distribution  Item spacing ('around' | 'between')
 * @param {String} props.vertical      vertical positioning ('top'|'middle'|'bottom')
 * @param {Boolen} props.stretch       Stretch items to fit parent ?
 */
var computeDirection = function computeDirection(_ref) {
  var horizontal = _ref.horizontal,
      distribution = _ref.distribution,
      vertical = _ref.vertical,
      stretch = _ref.stretch;

  var justifyContent = 'flex-start';
  var alignItems = 'flex-start';

  switch (horizontal) {
    case 'center':
      justifyContent = 'center';
      break;
    case 'right':
      justifyContent = 'flex-end';
      break;
    default:
      break;
  }

  switch (distribution) {
    case 'around':
      justifyContent = 'space-around';
      break;
    case 'between':
      justifyContent = 'space-between';
      break;
    default:
      break;
  }

  switch (vertical) {
    case 'top':
      alignItems = 'flex-start';
      break;
    case 'bottom':
      alignItems = 'flex-end';
      break;
    case 'middle':
      alignItems = 'center';
      break;
    default:
      break;
  }

  if (stretch) {
    alignItems = 'stretch';
  }

  return (0, _styledComponents.css)(_templateObject, justifyContent, alignItems);
};

var defaultRow = {
  horizontal: 'left',
  vertical: 'top'
};

var rowMixin = exports.rowMixin = function rowMixin() {
  var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRow;
  return (0, _styledComponents.css)(_templateObject2, function (_ref2) {
    var relative = _ref2.relative;
    return relative && (0, _styledComponents.css)(_templateObject3);
  }, computeDirection(configuration));
};