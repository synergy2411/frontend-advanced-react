import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import classes from './ProductEdit.module.css';

const ProductEdit = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate();

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

    const cancelClickHandler = () => navigate("/product-list")

    const deleteClickHandler = async () => {
        try {
            const response = await fetch("http://localhost:3030/products/" + product.id, {
                method: "DELETE"
            })
            const data = await response.json();
            console.log("DELETED : ", data);
            navigate("/product-list")
        } catch (err) {
            console.log(err)
        }

    }

    if (product && product.name) {
        return (
            <div className={`${classes["my-backdrop"]}`}>
                <div className={classes["alert-dialog"]}>
                    <h3 className='text-center m-3'> {product.name.toUpperCase()}</h3>
                    <h6 className='text-center m-4 p-2'>Are you sure to delete this item?</h6>
                    <div className='row m-2'>
                        <div className='col-6 d-grid'>
                            <button className='btn btn-outline-danger btn-sm'
                                onClick={deleteClickHandler}>Yes, Please delete</button>
                        </div>
                        <div className='col-6 d-grid'>
                            <button className='btn btn-outline-dark btn-sm'
                                onClick={cancelClickHandler}>No, Thanks</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductEdit;
