import React from 'react'
import styles from "./Modal.module.scss"

function Modal({ children, header, buttonText, opened }) {

    var handleOpen = (e) => {
        e.target.parentElement.nextElementSibling.classList.toggle("modal-open")
    }

    var handleClose = (e) => {
        e.preventDefault()
        e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("modal-open")
    }

    return (
        <>
            <main>
                <br />
                <button className="button open-modal" onClick={handleOpen}>{buttonText}</button>
            </main>

            <div className={`modal ${opened === true ? "modal-open" : ""}`}>
                <div className="modal-inner">
                    <div className="modal-content">
                        <div className="modal-close-icon">
                            <a href="#close" className="close-modal" onClick={handleClose}>X</a>
                        </div>
                        <div className="modal-content-inner">
                            <h4>{header}</h4>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    header: String,
    buttonText: String,
    opened: Boolean
}

export default Modal

