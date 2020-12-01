"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = Dropdown;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputsModule = _interopRequireDefault(require("./Inputs.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [export description]
 *
 * @param   {[String]}      label     The placeholder to be Shown for the Dropdown
 * @param   {[String]}      name      Sets the name for the Component
 * @param   {[String]}      id        Sets the id for the Component
 * @param   {[Object]}      options   The Dropdown options for the Component
 * @param   {[Function]}    onChange  Disables the Component if true
 * @param   {[Boolean]}     required  If true, an Option from the Dropdown is required to be picked
 * @param   {[Boolean]}     disabled  Disables the Component if true
 *
 * @return  {[Component]}             Returns a Dropdown Component
 */

/** 
 * A simple Dropdown Component
*/
function Dropdown(_ref) {
  var placeholder = _ref.placeholder,
      label = _ref.label,
      name = _ref.name,
      id = _ref.id,
      options = _ref.options,
      onChange = _ref.onChange,
      required = _ref.required,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label ? /*#__PURE__*/_react.default.createElement("label", null, label) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement("select", {
    className: _InputsModule.default["u-full-width"],
    name: name,
    id: id,
    onChange: onChange,
    disabled: disabled,
    required: required,
    value: placeholder
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: placeholder,
    selected: true,
    disabled: true,
    hidden: true
  }, placeholder), options ? Object.keys(options).map(function (key) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: key
    }, options[key]);
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)));
}

Dropdown.propTypes = {
  /**
   * The placeholder to be Shown for the Dropdown
   */
  placeholder: _propTypes.default.string,

  /**
   * Sets the id for the Component
   */
  id: _propTypes.default.string,

  /**
   * The label for the Component
   */
  label: _propTypes.default.string,

  /**
   * Sets the name for the Component
   */
  name: _propTypes.default.string,

  /**
   * The Dropdown options for the Component
   * 
   *          {
   *              optionValue: displayOption
   *           }
   */
  options: _propTypes.default.object,

  /**
   * Handle the onChange function of the Component
   */
  onChange: _propTypes.default.func,

  /**
   * Disables the Component if true
   */
  disabled: _propTypes.default.bool,

  /**
   * If true, an Option from the Dropdown is required to be picked
   */
  required: _propTypes.default.bool
};
Dropdown.defaultProps = {
  disabled: false,
  required: false
};
var _default = Dropdown;
exports.default = _default;