import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Inputs.module.scss"

function TextArea({ placeholder, label, id, onChange }) {
    return (
        <>
            {label ? <label>{label}</label> : <></>}
            <textarea className={styles["u-full-width"]} placeholder={placeholder} id={id} onChange={onChange}></textarea>
        </>
    )
}

TextArea.propTypes = {
    placeholder: String,
    id: String,
    label: String,
    onChange: Function
}

export default TextArea


