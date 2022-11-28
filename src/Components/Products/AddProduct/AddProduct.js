import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const AddProduct = () => {

    const navigate = useNavigate()
    const productNameInputRef = useRef()
    const companyInputRef = useRef()
    const priceInputRef = useRef()

    const cancelClickHandler = () => {
        navigate("/product-list")
    }

    const addProductClickHandler = async (event) => {
        event.preventDefault()
        let newProduct = {
            name: productNameInputRef.current.value,
            company: companyInputRef.current.value,
            price: priceInputRef.current.value
        }
        try {
            const response = await fetch("http://localhost:3030/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            })
            const data = await response.json();
            console.log(data);
            navigate("/product-list")
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-body">
                        <h4 className="text-center">Add Product</h4>
                        <form>
                            {/* product name */}
                            <label>Product Name :</label>
                            <input type="text" className="form-control"
                                ref={productNameInputRef} />
                            {/* company */}
                            <label>Company :</label>
                            <input type="text" className="form-control"
                                ref={companyInputRef} />
                            {/* price */}
                            <label>Price :</label>
                            <input type="number" className="form-control"
                                ref={priceInputRef} />
                            {/* buttons */}
                            <div className="d-grid m-2">
                                <button className="btn btn-primary m-1"
                                    onClick={addProductClickHandler}>Add Product</button>
                                <button className="btn btn-warning m-1"
                                    onClick={cancelClickHandler}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;