import React, { useEffect, useState } from 'react';
import './Home.css';
import PlantCard from '../../components/PlantCard/PlantCard';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Home() {

  const [plants, setplants] = useState([])

  const loadPlants = async () => {
    toast.loading("Loading plants...")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)

        toast.dismiss()
        toast.success("Plants loaded successfully")
        setplants(response.data.data)
  }

  useEffect(()=>{
    loadPlants()
  }, [])

  return (
    <div>
      
      <h1 className='fw-bold m-3 text-center'>Plants</h1>

      {
        plants.map((plant, i)=>{
          const {
            _id, 
            name, 
            category, 
            price, 
            image, 
            description
          } = plant

          return (<PlantCard 
            key={i}
            _id={_id} 
            name={name} 
            category={category} 
            price={price} 
            image={image} 
            description={description}
            loadPlants={loadPlants}
            />)
        })
      }
      <Toaster />

      <Link to="/add">
      <button className='add-btn bg-dark text-white py-1 px-4 rounded shadow d-block my-3 mx-auto text-decoration-none fs-4'>Add Plant</button>
      </Link>
    </div>
  )
}

export default Home