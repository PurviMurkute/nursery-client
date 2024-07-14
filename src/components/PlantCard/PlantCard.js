import React from 'react';
import './PlantCard.css';

function PlantCard({_id, name, category, image, price, description}) {
  return (
    <div className='plant-card border border-dark border-2 px-5 py-3 rounded m-5'>
      <h1 className='plant=title fs-3 fw-bolder'>{name}</h1>
      <p className='plant-price'>Price: {price}</p>
    </div>
  )
}

export default PlantCard