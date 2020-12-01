"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = Column;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ColumnModule = _interopRequireDefault(require("./Column.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param   {[Node]}  children  Defines the size of the Column
 * @param   {[Size]}  size      The Child Nodes of the Component
 *
 * @return  {[Component]}       Returns a Column Component
 */

/**
 * A Simple Column Component
 */
function Column(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_ColumnModule.default[size], " ").concat(size === "one" ? _ColumnModule.default.column : _ColumnModule.default.columns)
  }, children);
}

Column.propTypes = {
  /**
   * Defines the size of the Column
   */
  size: _propTypes.default.oneOf(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]),

  /**
   * The Child Nodes of the Component
   */
  children: _propTypes.default.node
};
var _default = Column;
exports.default = _default;