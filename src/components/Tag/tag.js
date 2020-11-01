import React from 'react'
import PropTypes from 'prop-types'
import style from "./Tag.module.scss"

export function Tag({ variant, children }) {
    if (variant === "primary") {
        return (
            <span class={`${style.tag} ${style.primary}`}>{children}</span>
        )
    }

    return (
        <span class={style.tag}>{children}</span>
    )
}

Tag.propTypes = {
    /**
     * Gets the variant which decides the styling
     */
    variant: PropTypes.oneOf(["primary", "default"]),
    /**
     * Gets the children node for the component
     */
    children: PropTypes.node
}

Tag.defaultProps = {
    variant: "default"
}

export default Tag

