import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetail from '../components/ProductDetail';

const Details = (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (props._id) {
            axios.get("http://localhost:8000/api/products/" + props._id)
                .then(res => setProduct({ ...res.data }))
                .catch(err => console.error("Error al obtener detalles del producto:", err));
        }
    }, [props._id]); 

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    );
}

export default Details;
