import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function Toast({ variant, children, duration }) {

    //Object with variant icons
    const variantIcons = {
        info: "info",
        warning: "alert",
        danger: "cancel-circle",
        success: "circle-check"
    }

    //State for toast Class
    const [state, setState] = useState("toast-open")

    //Timer to hide the Toast 
    useEffect(() => {
        const timer = setTimeout(() => {
            setState("")
        }, duration ?? 5000);
        return () => clearTimeout(timer);
    }, []);

    //Change state when close btn clicked
    var handleClose = (e) => {
        e.preventDefault()
        setState("")
    }

    return (
        <div className={`toast ${state}`}>
            <div className="toast-inner">
                <div className="toast-content">
                    <div className={`toast-close-icon`}>
                        <a href="#close" className={`close-toast ${variant}`} onClick={handleClose}>X</a>
                    </div>
                    <div className="toast-content-inner">
                        <div className="icons clearfix">
                            <div className="icon">
                                <i className={`ddc-icon ddc-icon-${variantIcons[variant]} ${variant}`}></i>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

Toast.propTypes = {
    children: String,
    duration: Number,
    variant: String
}

export default Toast

