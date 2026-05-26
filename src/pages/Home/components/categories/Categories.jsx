import React from 'react'
import { CategoryCard } from './CategoryCard';
import './Categories.css'


const categories = [
    { name: "Horror", icon: "👻" },
    { name: "Romance", icon: "❤️" },
    { name: "Sci-Fi", icon: "🚀" },
    { name: "Motivation", icon: "🔥" },
    { name: "Kids Stories", icon: "🧒" },
    { name: "Podcasts", icon: "🎙️" },
    { name: "Funny", icon: "😆" },
    { name: "Mystery & Thriller", icon: "🕵️🔪🩸" },
];

export const Categories = () => {

    return (
        <div className='categories-section'>
            <h2 className="categories-title">Browse Categories</h2>
            <div className="categories-grid">
                {categories.map((cat, index) => (
                    <CategoryCard key={index} name={cat.name} icon={cat.icon} />
                ))}
            </div>
        </div>
    )
}
