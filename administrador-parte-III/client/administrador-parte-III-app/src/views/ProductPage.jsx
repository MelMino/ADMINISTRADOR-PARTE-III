import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log('Products data:', res.data);
                setProducts(Array.isArray(res.data) ? res.data : []);
                setIsLoaded(true);
            })
            .catch(err => {
                setError(err.message);
                setIsLoaded(true);
            });
    }, []);

    if (!isLoaded) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error loading products: {error}</p>;
    }

    return (
        <div>
            <ProductForm />
            <hr />
            <ProductList products={products} />
        </div>
    );
}

export default ProductPage;
