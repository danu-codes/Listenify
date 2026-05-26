import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='navabr-container'>
            <div className="logo">listenify</div>

            <ul className='nav-links'>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>Explore</li>
                <li className='nav-link'>Upload Story</li>
                <li className='nav-link'>Podcasts</li>
                <li><button className='log-reg-btn'>Login/Register</button></li>
            </ul>

            <div className="search-container">
                <input type="text" placeholder='Search Here' />
                <button className='search-btn'>🔍︎</button>
            </div>

            <div className="hamburger">
                ☰
            </div>

        </div>
    )
}
