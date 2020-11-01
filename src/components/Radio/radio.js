import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

function Radio({ value, name, id, onClick, onChange, children }) {
    return (
        <div style={{ display: "-webkit-inline-box" }}>
            <input type="radio" name={name} value={value} id={id} onClick={onClick} onChange={onChange}></input>
            <label>{children}</label>
        </div>
    )
}

Radio.propTypes = {
    value: String,
    name: String,
    id: String,
    onClick: Function,
    onChange: Function,
    children: String
}

export default Radio

