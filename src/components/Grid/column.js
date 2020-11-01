import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Column.module.scss"

function Column({ children, size }) {

    return (
        <div className={`${size} ${size === "one" ? "column" : "columns"}`}>
            {children}
        </div>
    )
}

Column.propTypes = {
    size: String
}

export default Column

