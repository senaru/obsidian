import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function Accordion({ children, header }) {

    var handleClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("active");
        var panel = e.target.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    return (
        <>
            <button className="accordion" onClick={handleClick}>{header}</button>
            <div className="accordion-panel">
                {children}
            </div>
        </>


    )
}

Accordion.propTypes = {
    header: String
}

export default Accordion

