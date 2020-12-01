"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ordered = exports.Unordered = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = require("./List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: 'Example/List',
  component: _List.List
};
exports.default = _default;

var Template = function Template(_ref) {
  var children = _ref.children,
      args = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_List.List, args, children);
};

var listItems = ["Item1", ["Item2.1", "Item 2.2"], "Item3"];
var Unordered = Template.bind({});
exports.Unordered = Unordered;
Unordered.args = {
  items: listItems
};
var Ordered = Template.bind({});
exports.Ordered = Ordered;
Ordered.args = {
  items: listItems,
  listType: "ordered",
  subListType: "ordered"
};