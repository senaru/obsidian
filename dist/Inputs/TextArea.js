"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = TextArea;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputsModule = _interopRequireDefault(require("./Inputs.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param   {[String]}      placeholder  Sets the name for the Component
 * @param   {[String]}      label        The label for the Component
 * @param   {[String]}      name         Sets the id for the Component
 * @param   {[String]}      id           Sets the id for the Component
 * @param   {[Function]}    onChange     Handle the onChange function of the Component
 * @param   {[Boolean]}     readOnly     If true, the TextArea is non-editable
 * @param   {[Number]}      maxLength    Sets the maximum number of characters that can be entered for the Input Field
 * @param   {[Number]}      minLength    Sets the minimum number of characters required for the Input Field
 * @param   {[Boolean]}     required     If true, the Component is required to be filled
 * @param   {[Boolean]}     disabled     If true, disables the Component
 *
 * @return  {[Component]}                Returns a TextArea Component
 */

/**
 * A Simple TextArea Component
 */
function TextArea(_ref) {
  var placeholder = _ref.placeholder,
      label = _ref.label,
      name = _ref.name,
      id = _ref.id,
      onChange = _ref.onChange,
      readOnly = _ref.readOnly,
      maxLength = _ref.maxLength,
      minLength = _ref.minLength,
      required = _ref.required,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label ? /*#__PURE__*/_react.default.createElement("label", null, label) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement("textarea", {
    className: _InputsModule.default["u-full-width"],
    placeholder: placeholder,
    name: name,
    id: id,
    onChange: onChange,
    maxLength: maxLength,
    minLength: minLength,
    required: required,
    disabled: disabled,
    readOnly: readOnly
  }));
}

TextArea.propTypes = {
  /**
   * The placeholder to be Shown for the TextArea
   */
  placeholder: _propTypes.default.string,

  /**
   * Sets the name for the Component
   */
  name: _propTypes.default.string,

  /**
   * Sets the id for the Component
   */
  id: _propTypes.default.string,

  /**
   * The label for the Component
   */
  label: _propTypes.default.string,

  /**
   * Handle the onChange function of the Component
   */
  onChange: _propTypes.default.func,

  /**
   * If true, the TextArea is non-editable
   */
  readOnly: _propTypes.default.bool,

  /**
   * Sets the maximum number of characters that can be entered for the Input Field
   */
  maxLength: _propTypes.default.number,

  /**
   * Sets the minimum number of characters required for the Input Field
   */
  minLength: _propTypes.default.number,

  /**
   * If true, the Component is required to be filled
   */
  required: _propTypes.default.bool,

  /**
   * If true, disables the Component
   */
  disabled: _propTypes.default.bool
};
TextArea.defaultProps = {
  disabled: false,
  required: false,
  readOnly: false
};
var _default = TextArea;
exports.default = _default;