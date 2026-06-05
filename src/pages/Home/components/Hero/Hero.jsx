import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'

export const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className='hero-section'>
            <div className="hero-left">
                <h2 className='hero-heading'>"Listen to Stories Anywhere, Anytime"</h2>
                <h3 className='hero-Subtitle'>Explore audiobooks, podcasts, and real voices from creators around the world.</h3>
                <div className="hero-btn-container">
                    <button onClick={() => navigate("/explore")}>🎧 Start Listening</button>
                    <button onClick={() => navigate("/upload")}>🎤 Upload Your Story</button>
                </div>
            </div>
            <div className="hero-right">
                <img src={`${import.meta.env.BASE_URL}images/hero2.jpg`} alt="Music image" />
            </div>
        </div>
    )
}
