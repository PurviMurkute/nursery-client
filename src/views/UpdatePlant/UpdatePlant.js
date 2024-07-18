import axios from 'axios';
import React, {useEffect, useState} from 'react'
import toast, {Toaster} from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UpdatePlant() {
    const {id} = useParams();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const updatePlant = async () => {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`, {
            name: name,
            price: price,
            image: image,
            category: category,
            description: description
        })

        toast.dismiss()

        toast.success(response.data.message)

        setName("")
        setCategory("")
        setPrice("")
        setImage("")
        setDescription("")
    }

    const loadPlant = async (id)=>{
        if(!id){
            return
        }

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)

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
    <div className='bg-body-secondary'>
        <h1 className='text-center'>Update Plant: {id}</h1>

        <div className='d-flex justify-content-center align-items-center'>
        <form className='border border-dark py-3 px-5 m-3 rounded shadow bg-success'>

                <input
                    type='text'
                    placeholder='Enter plant name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='plant-input d-block my-3 mx-5 p-2'
                />

                <input
                    type='number'
                    placeholder='Enter plant price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='plant-input d-block my-3 mx-5 p-2'
                />

                <input
                    type='text'
                    placeholder='Enter plant category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='plant-input d-block my-3 mx-5 p-2'
                />

                <img src={image} />

                <input
                    type='text'
                    placeholder='Enter plant image url'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className='plant-input d-block my-3 mx-5 p-2'
                />

                <input
                    type='text'
                    placeholder='Enter plant description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='plant-input d-block my-3 mx-5 p-2'
                />

                <button type='button' onClick={updatePlant} className='bg-dark text-white py-1 px-3 rounded shadow d-block my-3 mx-auto text-decoration-none fs-5' >Update Plant</button>
            </form>
            </div>
            <br/>
            <Link to="/">
            <button className='bg-dark text-white py-1 px-3 rounded shadow d-block my-3 mx-auto text-decoration-none fs-5'>Click here to see all plant</button>
            </Link>
            <Toaster/>
    </div>
  )
}

export default UpdatePlant