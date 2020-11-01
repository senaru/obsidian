import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

/**
 * @param   {[type]}  children  [children description]
 * @param   {[type]}  href      [href description]
 * @param   {[type]}  variant   [variant description]
 * @param   {[type]}  type      [type description]
 * @param   {[type]}  onClick   [onClick description]
 *
 * @return  {[type]}            [return description]
 */
/**
 * A simple functional component that accepts filtered props similar to an HTML button
 */
export function Button({ children, href, variant, type, onClick }) {

    const className = `button ${variant}`

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
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

Button.displayName = "Button"

Button.propTypes = {
    /**
     * Children node of the component
     */
    children: PropTypes.node,
    href: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["submit", "reset", "button"]),
}

Button.defaultProps = {
    onClick: () => console.log("Clicked!")
}

export default Button