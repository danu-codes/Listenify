import React from 'react'
import './Hero.css'

export const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="hero-left">
                <h2 className='hero-heading'>"Listen to Stories Anywhere, Anytime"</h2>
                <h3 className='hero-Subtitle'>Explore audiobooks, podcasts, and real voices from creators around the world.</h3>
                <div className="hero-btn-container">
                    <button>🎧 Start Listening</button>
                    <button>🎤 Upload Your Story</button>
                </div>
            </div>
            <div className="hero-right">
                <img src="./images/hero2.jpg" alt="Music image" />
            </div>
        </div>
    )
}
