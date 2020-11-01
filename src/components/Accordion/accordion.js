import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Accordion.module.scss"

export function Accordion({ children, header }) {

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
            <button className={styles.accordion} onClick={handleClick}>{header}</button>
            <div className={styles["accordion-panel"]}>
                {children}
            </div>
        </>
    )
}

Accordion.propTypes = {
    header: String
}

export default Accordion

