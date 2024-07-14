import React, { useEffect, useState } from 'react';
import './Home.css';
import PlantCard from '../../components/PlantCard/PlantCard';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';

function Home() {

  const [plants, setplants] = useState([])

  const loadPlants = async () => {
    toast.loading("Loading plants...")
        const response = await axios.get('https://nursery-client-2hle.onrender.com/plants')

        toast.dismiss()
        toast.success("Plants loaded successfully")
        setplants(response.data.data)
  }

  useEffect(()=>{
    loadPlants()
  }, [])

  return (
    <div>
      
      <h1 className='fw-bold m-3'>Plants</h1>

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
            _id={_id} 
            name={name} 
            category={category} 
            price={price} 
            image={image} 
            description={description}
            />)
        })
      }
      <Toaster />
    </div>
  )
}

export default Home