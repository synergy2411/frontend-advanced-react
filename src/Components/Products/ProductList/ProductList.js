import { useEffect, useState } from "react";
import { Routes, useNavigate, Route } from 'react-router-dom';

import ProductEdit from "../ProductEdit/ProductEdit";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    // const [showEdit, setShowEdit] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:3030/products")
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts()
    })


    const deleteClickHandler = (productId) => {
        navigate("/product-list/edit/" + productId)
    }

    return (
        <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, idx) => {
                        return <tr key={product.id}>
                            <td>{idx + 1}</td>
                            <td>{product.name.toUpperCase()}</td>
                            <td>{product.company.toUpperCase()}</td>
                            <td>${product.price}</td>
                            <td><button onClick={() => deleteClickHandler(product.id)}
                                className="btn btn-outline-danger btn-sm">DELETE</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
            {/* {showEdit && <ProductEdit />} */}
            <Routes>
                <Route path="/edit/:productId" element={<ProductEdit />} />
            </Routes>
        </div>
    )
}

export default ProductList;

// http://localhost:3030/products > [{}, {}, {}]