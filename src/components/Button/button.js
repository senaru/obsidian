import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

/**
 * Button Component
 *
 * @param   {[type]}  children    [children description]
 * @param   {[type]}  href        [href description]
 * @param   {[type]}  variant     [variant description]
 * @param   {[type]}  type        [type description]
 * @param   {[type]}  onClick     [onClick description]
 * @param   {[type]}  disabled    [disabled description]
 * @param   {[type]}  formAction  [formAction description]
 * @param   {[type]}  size        [formAction description]
 *
 * @return  {[type]}              [return description]
 */
/**
 * A simple functional component that accepts filtered props similar to an HTML button
 */
export function Button({ children, href, variant, type, onClick, disabled, formAction, size }) {

    const className = `button ${variant} ${size}`

    if (href) {
        return (
            <a className={className} href={href}>
                {children}
            </a>
        )
    } else if (type) {
        return (
            <input className={className} type={type} value={children}></input>
        )
    }

    return (
        <button className={className} onClick={onClick} disabled={disabled} formAction={formAction}>
            {children}
        </button>
    )
}

Button.propTypes = {
    /**
     * Children node of the component
     */
    children: PropTypes.node,
    /**
     * Get an href for an Anchor Button
     */
    href: PropTypes.string,
    /**
     * Get the variant to determine the style of the button
     */
    variant: PropTypes.string,
    /**
     * Select type for Input Buttons
     */
    type: PropTypes.oneOf(["submit", "reset", "button"]),
    /**
     * Determine the size of the Button component
     */
    size: PropTypes.string,
    /**
     * onClick function of the component
     */
    onClick: PropTypes.func,
    /**
     * Disable the button component
     */
    disabled: PropTypes.bool,
    /**
     * Provides a formAction for the component
     */
    formAction: PropTypes.string
}

Button.defaultProps = {
    variant: "Default",
    disabled: false
}

export default Button