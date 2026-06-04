import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);
    const navigate = useNavigate();

    return (
        <div className="navbar-container">

            {/* LOGO */}
            <div className="logo">
                Listenify
            </div>

            {/* NAV LINKS */}
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

                <li>
                    <NavLink to="/" className="nav-link" onClick={closeMenu}>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/explore" className="nav-link" onClick={closeMenu}>
                        Explore
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/upload" className="nav-link" onClick={closeMenu}>
                        Upload
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/podcasts" className="nav-link" onClick={closeMenu}>
                        Podcasts
                    </NavLink>
                </li>

                {/* MOBILE LOGIN */}
                <li className="mobile-auth">
                    <button className="auth-btn"
                        onClick={() => navigate("/auth")}>
                        Login / Register
                    </button>
                </li>

            </ul>

            <div className="nav-search-wrapper">
                <input type="text" placeholder="Search..." />
            </div>

            {/* HAMBURGER */}
            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✖" : "☰"}
            </div>


            {/* DESKTOP LOGIN */}
            <div className="auth-desktop">
                <button className="auth-btn">
                    Login / Register
                </button>
            </div>

        </div>
    );
};