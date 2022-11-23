import { useState } from 'react';

const AddExpense = () => {

    const [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        console.log("Entered Title : ", enteredTitle);
    }

    return (
        <div className='card m-4'>
            <div className='card-body'>
                <h4 className='text-center'>Add Expense Form</h4>

                <form onSubmit={submitHandler}>
                    {/* title */}
                    <div className='form-group m-2 p-2'>
                        <div className='row'>
                            <div className='col-5'>
                                <label htmlFor="title">Title : </label>
                            </div>
                            <div className='col-7'>
                                <input type="text" name="title"
                                    onChange={titleChangeHandler}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* amount */}

                    {/* created at date */}

                    <div className='row'>
                        <div className='col-6 d-grid'>
                            <button className='btn btn-success' type='submit'>
                                Add</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddExpense;