"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = Row;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param   {[Node]}  children  The Child Nodes of the Component
 *
 * @return  {[Component]}       Retuns a Row Component
 */

/**
 * A Simple Row Component
 */
function Row(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, children);
}

Row.propTypes = {
  /**
   * The Child Nodes of the Component
   */
  children: _propTypes.default.node
};
var _default = Row;
exports.default = _default;