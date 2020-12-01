"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Table = require("./Table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  title: 'Example/Table',
  component: _Table.Table
};
exports.default = _default;

var Template = function Template(_ref) {
  var args = _extends({}, _ref);

  return /*#__PURE__*/_react.default.createElement(_Table.Table, args);
};

var headings = ["Name", "Weight"];
var body = [["Item", "Item Weight"], ["Item2", "Item2 Weight"]];
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  headings: headings,
  body: body
};