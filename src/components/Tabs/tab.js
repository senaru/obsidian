import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Tab.module.scss"

function Tab({ tabs }) {

    var handleClick = (e) => {
        var tabButtons = [].slice.call(document.querySelectorAll('ul.tab-nav li a.button'));
        tabButtons.map((button) => {
            button.addEventListener('click', function () {
                document.querySelector('li a.active.button').classList.remove('active');
                button.classList.add('active');
                document.querySelector('.tab-pane.active').classList.remove('active');
                document.querySelector(button.getAttribute('href')).classList.add('active');
            })
        })

    }

    return (
        <ul class="tab-nav">
            {/* 
            Get Array of objects
            Format:
                tabs = [ [href,displayName], [href2,displayName2] ]
            */}
            {tabs ?
                tabs.map((tab) =>
                    <li>
                        <a class="button active" href={tab[0]} onClick={handleClick}>{tab[1]}</a>
                    </li>
                ) : <></>
            }
        </ul>
    )
}

Tab.propTypes = {
    tabs: Array
}

export default Tab

