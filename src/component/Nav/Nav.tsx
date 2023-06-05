import React from "react";
import styles from './nav.module.scss'



const Nav = () => {

    return (
        <header className={`main-nav ${styles['nav']}`}>
            <h2>Weather</h2>
        </header>
    )
}

export default Nav;
