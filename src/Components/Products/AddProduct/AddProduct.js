import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const navigate = useNavigate()

    const cancelClickHandler = () => {
        navigate("/product-list")
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
                            <input type="text" className="form-control" />
                            {/* company */}
                            <label>Company :</label>
                            <input type="text" className="form-control" />
                            {/* price */}
                            <label>Price :</label>
                            <input type="number" className="form-control" />
                            {/* buttons */}
                            <div className="d-grid m-2">
                                <button className="btn btn-primary m-1">Add Product</button>
                                <button className="btn btn-warning"
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