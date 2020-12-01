"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = Checkbox;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputsModule = _interopRequireDefault(require("./Inputs.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [export description]
 *
 * @param   {[Node]}        children        Sets the label for the Checkbox 
 * @param   {[String]}      id              Sets the id for the Component
 * @param   {[String]}      name            Sets the name of the Component
 * @param   {[String]}      value           Sets a value for the Component
 * @param   {[Boolean]}     required        The Checkbox is required to be checked if true
 * @param   {[Function]}    onClick         Handle the onClick function of the Component
 * @param   {[Function]}    onChange        Handle the onChange function of the Component
 * @param   {[Boolean]}     disabled        If true, the Checkbox is checked by default
 * @param   {[Boolean]}     defaultChecked  If true, the Checkbox is checked by default
 *
 * @return  {[Component]}                   Returns a Checkbox Component
 */

/**
 * A simple Checkbox Component with a label
 */
function Checkbox(_ref) {
  var children = _ref.children,
      id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      required = _ref.required,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      defaultChecked = _ref.defaultChecked;
  return /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: id,
    onChange: onChange,
    name: name,
    value: value,
    required: required,
    onClick: onClick,
    disabled: disabled,
    defaultChecked: defaultChecked
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _InputsModule.default["label-body"]
  }, children));
}

Checkbox.propTypes = {
  /**
   * Sets the label for the Checkbox 
   */
  children: _propTypes.default.node,

  /**
   * Sets the id for the Component
   */
  id: _propTypes.default.string,

  /**
   * Sets the name of the Component
   */
  name: _propTypes.default.string,

  /**
   * Sets a value for the component
   */
  value: _propTypes.default.string,

  /**
   * Handle the onChange function of the Component
   */
  onChange: _propTypes.default.func,

  /**
   * Handle the onClick function of the Component
   */
  onClick: _propTypes.default.func,

  /**
   * Disables the checkbox if true
   */
  disabled: _propTypes.default.bool,

  /**
   * If true, the Checkbox is checked by default
   */
  defaultChecked: _propTypes.default.bool,

  /**
   * The Checkbox is required to be checked if true
   */
  required: _propTypes.default.bool
};
Checkbox.defaultProps = {
  disabled: false,
  required: false,
  defaultChecked: false
};
var _default = Checkbox;
exports.default = _default;