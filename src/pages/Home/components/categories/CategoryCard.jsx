import React from 'react'
import './CategoryCard.css'

export const CategoryCard = ({name, icon}) => {
  return (
    <div className='category-card'>
        <div className="category-icon">{icon}</div>
        <h3 className='category-name'>{name}</h3>
    </div>
  )
}
