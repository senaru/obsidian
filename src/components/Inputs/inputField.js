import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Inputs.module.scss"

function InputField({ placeholder, label, type, id, onChange }) {
    return (
        <>
            { label ? <label>{label}</label> : <></>}
            <input className="u-full-width" type={type ?? "text"} placeholder={placeholder} id={id} onChange={onChange}></input>
        </>
    )
}

InputField.propTypes = {
    placeholder: String,
    id: String,
    label: String,
    type: String,
    onChange: Function
}

export default InputField


