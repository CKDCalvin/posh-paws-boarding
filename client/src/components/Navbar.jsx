import React, { useState } from "react";
import styles from "../assets/styles/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.headerSection}>
            <div className={styles.headerContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.logoContainer}>
                        <img
                            src="/images/posh-paws-logo.png"
                            alt="Posh Paws Logo"
                            className={styles.logo}
                        />
                        <h1>Posh Paws Boarding</h1>
                    </div>

                    <div className={styles.contactInfo}>
                        <button>Instagram</button>
                        <button>Facebook</button>
                        <button>913-555-0245</button>
                    </div>

                    <button
                        className={styles.menuToggle}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        ☰
                    </button>
                </div>

                <nav className={`${styles.navigation} ${menuOpen ? styles.open : ""}`}>
                    <div className={styles.navbarLeft}>
                        <ul>
                            <li><NavLink to="/" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? `${styles.actBtn} ${styles.active}` : styles.actBtn}>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? `${styles.actBtn} ${styles.active}` : styles.actBtn}>About</NavLink></li>
                            <li><NavLink to="/rates" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? `${styles.actBtn} ${styles.active}` : styles.actBtn}>Rates</NavLink></li>
                            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? `${styles.actBtn} ${styles.active}` : styles.actBtn}>Contact</NavLink></li>
                        </ul>
                    </div>

                    <div className={styles.navbarRight}>
                        <NavLink to="/check-in" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? `${styles.actBtn} ${styles.active}` : styles.actBtn}>Check In</NavLink>
                        <NavLink to="/reservation/form" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? `${styles.actBtn} ${styles.active}` : styles.actBtn}>Reservation Form</NavLink>
                        <NavLink to="/reservation" end onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? `${styles.actBtn} ${styles.active}` : styles.actBtn}>Reservation Lookup</NavLink>
                        <NavLink to="/admin" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? `${styles.actBtn} ${styles.active}` : styles.actBtn}>Admin</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;