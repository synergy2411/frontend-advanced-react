import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './ProductEdit.module.css';

const ProductEdit = () => {
    const params = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch("http://localhost:3030/products/" + params['productId'])
                const data = await response.json()
                setProduct(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchProduct()
    }, [params])

    if (product && product.name) {
        return (
            <div className={`container ${classes["my-backdrop"]}`}>
                <div className={classes["alert-dialog"]}>
                    <h3 className='text-center m-3'> {product.name.toUpperCase()}</h3>
                    <h6 className='text-center m-4 p-2'>Are you sure to delete this item?</h6>
                    <div className='row'>
                        <div className='col-6 d-grid'>
                            <button className='btn btn-outline-danger btn-sm'>Yes, Please delete</button>
                        </div>
                        <div className='col-6 d-grid'>
                            <button className='btn btn-outline-dark btn-sm'>No, Thanks</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductEdit;
