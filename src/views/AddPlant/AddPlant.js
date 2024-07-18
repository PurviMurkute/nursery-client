import React, { useState } from 'react';
import './AddPlant.css';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddPlant() {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const addPlant = async () => {
        toast.loading("Adding plant...")

        if (!name || !category || !price || !image || !description) {
            toast.error("Please enter all details")

            return
        }

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
            name: name,
            price: price,
            category: category,
            image: image,
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

    return (
        <div className='bg-body-secondary'>
            <h1 className='text-center'>Add Plant</h1>

            <div className='d-flex justify-content-center align-items-center'>
            <form className='border border-dark p-5 m-3 rounded shadow bg-success'>

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

                <button type='button' onClick={addPlant} className='bg-dark text-white py-1 px-3 rounded shadow d-block my-3 mx-auto text-decoration-none fs-5'>Add Plant</button>
            </form>
            </div>

            <br />
            <Link to="/">
            <button className='bg-dark text-white py-1 px-3 rounded shadow d-block my-3 mx-auto text-decoration-none fs-5'>Click here to see all plant</button>
            </Link>
        </div>
    )
}

export default AddPlant