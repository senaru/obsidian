"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = Grid;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GridModule = _interopRequireDefault(require("./Grid.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param   {[Node]}  children  The Child Nodes of the Component
 *
 * @return  {[Component]}        Returns a Grid Component
 */

/**
 * A Simple Grid Component
 */
function Grid(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _GridModule.default.container
  }, children);
}

Grid.propTypes = {
  /**
   * The Child Nodes of the Component
   */
  children: _propTypes.default.node
};
var _default = Grid;
exports.default = _default;