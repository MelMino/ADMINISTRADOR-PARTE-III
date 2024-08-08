import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    const { name, price, description } = product;

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => navigate('/'))
            .catch(error => console.error('Error deleting product:', error));
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>Precio: {price}</p>
            <p>Descripción: {description}</p>
            <button onClick={deleteProduct}>Eliminar</button>
        </div>
    );
}

export default ProductDetail;
