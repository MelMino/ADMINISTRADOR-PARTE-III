import React from 'react';
import axios from 'axios';

const DeleteButton = ({ productId, onClick }) => {
    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => onClick())
            .catch(error => console.error('Error deleting product:', error));
    }

    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default DeleteButton;
