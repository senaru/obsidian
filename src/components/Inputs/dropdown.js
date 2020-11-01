import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Inputs.module.scss"

function Dropdown({ label, id, options, onChange }) {
    return (
        <>
            {label ? <label>{label}</label> : <></>}
            <select className={styles["u-full-width"]} id={id} onChange={onchange}>
                {/* Loop through object.
                Dict Format:
                    options = {
                    optionValue: displayOption
                    }
                 */}
                {options ?
                    Object.keys(options).map(key =>
                        <option value={key}>{options[key]}</option>
                    ) : <></>
                }
            </select>
        </>
    )
}

Dropdown.propTypes = {
    placeholder: String,
    id: String,
    label: String,
    options: Object,
    onChange: Function,
}

export default Dropdown


