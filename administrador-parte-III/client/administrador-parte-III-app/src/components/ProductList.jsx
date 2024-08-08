import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const { products, setProducts } = props;

    if (!Array.isArray(products)) {
        return <p>No products available</p>;
    }

    const removeFromDom = (productId) => {
        setProducts(products.filter(prod => prod._id !== productId));
    }

    return (
        <div>
            {products.map(product => (
                <div key={product._id}>
                    <p>
                        <Link to={`/${product._id}`}>{product.name}</Link>
                        | <Link to={`/${product._id}/edit`}>Edit</Link>
                        | <DeleteButton productId={product._id} removeFromDom={removeFromDom} />
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
