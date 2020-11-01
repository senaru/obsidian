import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Inputs.module.scss"

function Checkbox({ children, id, onChange, onClick, disabled }) {
    return (
        <label>
            <input type="checkbox" id={id} onChange={onChange} onClick={onClick} disabled={disabled} />
            <span className={styles["label-body"]}>{children}</span>
        </label>
    )
}

Checkbox.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Checkbox

