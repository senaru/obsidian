"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = Radio;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioModule = _interopRequireDefault(require("./Radio.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param   {[String]}    value           Assigns a value for the Component
 * @param   {[String]}    name            Assigns a name to the Component
 * @param   {[String]}    id              Assigns an id to the Component
 * @param   {[Function]}  onClick         The onClick function for the Component
 * @param   {[Function]}  onChange        The onChange function for the Component
 * @param   {[Node]}      children        Gets the Label to be displayed for the checkbox
 * @param   {[Boolean]}   disabled        Disables the checkbox if true
 * @param   {[Boolean]}   checked         Checks the Checkbox if true
 * @param   {[Boolean]}   defaultChecked  The Checkbox loads checked by default 
 *
 * @return  {[Component]}                 Returns a Radio Component
 */

/**
 * A simple Radio Component that returns an HTML Radio element
 */
function Radio(_ref) {
  var value = _ref.value,
      name = _ref.name,
      id = _ref.id,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      children = _ref.children,
      disabled = _ref.disabled,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "-webkit-inline-box"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    id: id,
    onClick: onClick,
    onChange: onChange,
    disabled: disabled,
    checked: checked,
    defaultChecked: defaultChecked
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: _RadioModule.default.label
  }, children));
}

Radio.propTypes = {
  /**
   * Assigns a value for the Component
   */
  value: _propTypes.default.string,

  /**
   * Assigns a name to the Component
   */
  name: _propTypes.default.string,

  /**
   * Assigns an id to the Component
   */
  id: _propTypes.default.string,

  /**
   * The onClick function for the Component
   */
  onClick: _propTypes.default.func,

  /**
   * The onChange function for the Component
   */
  onChange: _propTypes.default.func,

  /**
   * Gets the Label to be displayed for the checkbox
   */
  children: _propTypes.default.node,

  /**
   * Disables the checkbox if true
   */
  disabled: _propTypes.default.bool,

  /**
   * Checks the Checkbox if true
   */
  checked: _propTypes.default.bool,

  /**
   * The Checkbox loads checked by default 
   */
  defaultChecked: _propTypes.default.bool
};
Radio.defaultProps = {
  disabled: false,
  defaultChecked: false
};
var _default = Radio;
exports.default = _default;