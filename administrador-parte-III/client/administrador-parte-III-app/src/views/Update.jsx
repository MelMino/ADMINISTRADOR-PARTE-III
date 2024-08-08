import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setName(res.data.name);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(error => console.error('Error fetching product details:', error));
    }, [id]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            name,
            price,
            description
        })
        .then(() => navigate(`/${id}`))
        .catch(err => console.error('Error updating product:', err));
    }

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br />
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </p>
                <p>
                    <label>Price</label><br />
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                </p>
                <p>
                    <label>Description</label><br />
                    <input 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </p>
                <input type="submit" value="Update Product" />
            </form>
        </div>
    );
}

export default Update;
