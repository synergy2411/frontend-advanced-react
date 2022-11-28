import { useEffect, useState } from "react";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:3030/products")
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts()
    }, [])

    return (
        <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Company</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, idx) => {
                        return <tr key={product.id}>
                            <td>{idx + 1}</td>
                            <td>{product.name.toUpperCase()}</td>
                            <td>{product.company.toUpperCase()}</td>
                            <td>${product.price}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default ProductList;

// http://localhost:3030/products > [{}, {}, {}]