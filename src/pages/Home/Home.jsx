import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import './Home.css'
import { Categories } from './components/categories/Categories'
import { Trending } from './components/trending/trending'
import { Latest } from './components/latest/Latest'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer'
import {Creators} from './components/FeaturedCreators/Creators'
import { Recommended } from './components/recommended/Recommended'
import { Footer } from './components/Footer/Footer'

export const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <Hero/>  
        <Categories/>
        <Trending/>
        <Latest/>
        <Creators/>
        <Recommended/>
        <Footer/>
    </div>
  )
}
