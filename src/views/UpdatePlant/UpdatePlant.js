import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function UpdatePlant() {
    const {id} = useParams();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const loadPlant = async (id)=>{
        if(!id){
            return
        }

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/id`)

        const {name, price, image, category, description} = response.data.data

        setName(name)
        setImage(image)
        setPrice(price)
        setCategory(category)
        setDescription(description)

    }

    useEffect(()=>{
        if(id){
            loadPlant(id)
        }
    }, [id])

  return (
    <div>
        <h1>Update Plant: {id}</h1>

        <form>

                <input
                    type='text'
                    placeholder='Enter plant name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='plant-input d-block m-3 p-2'
                />

                <input
                    type='number'
                    placeholder='Enter plant price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='plant-input d-block m-3 p-2'
                />

                <input
                    type='text'
                    placeholder='Enter plant category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='plant-input d-block m-3 p-2'
                />

                <img src={image} />

                <input
                    type='text'
                    placeholder='Enter plant image url'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className='plant-input d-block m-3 p-2'
                />

                <input
                    type='text'
                    placeholder='Enter plant description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='plant-input d-block m-3 p-2'
                />

                <button type='button' >Update Plant</button>
            </form>

    </div>
  )
}

export default UpdatePlant