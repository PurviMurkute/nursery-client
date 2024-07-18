import React from 'react';
import './PlantCard.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function PlantCard({_id, name, category, image, price, description, loadPlants}) {

  const deletePlant = async (plantId) => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)

    toast.success(response.data.message)

    loadPlants()
  }
  return (
    <div className='plant-card border border-light bg-success border-2 px-5 py-3 shadow rounded-3 m-5 position-relative'>
      <h1 className='plant=title fs-3 fw-bolder text-white'>{name}</h1>
      <p className='plant-price text-white'>Price: {price}</p>
      <img src={image} alt='plant-img' className='card-img position-absolute top-0 end-0 m-3'/>

      <div>
        <Link to={`/update/${_id}`} className='action-btn bg-dark text-white rounded border border-0 rounded-4 me-2 px-4 py-0 text-decoration-none' >Edit</Link>
        <button type='button' className='action-btn bg-dark text-white rounded border border-0 rounded-4 me-2 px-4 py-0' onClick={()=>{
          deletePlant(_id)
        }}>Delete</button>
      </div>
    </div>
  )
}

export default PlantCard