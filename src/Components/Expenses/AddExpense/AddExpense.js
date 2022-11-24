import { useState } from 'react';

const AddExpense = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredCreatedAt, setEnteredCreatedAt] = useState('');

    const titleChangeHandler = (event) => setEnteredTitle(event.target.value);

    const amountChangeHandler = event => setEnteredAmount(event.target.value)

    const createdAtChangeHandler = event => setEnteredCreatedAt(event.target.value)

    const submitHandler = event => {
        event.preventDefault();
        props.onAddExpense(enteredTitle, enteredAmount, enteredCreatedAt);
    }

    return (
        <div className='card m-4'>
            <div className='card-body'>
                <h4 className='text-center'>Add Expense Form</h4>

                <form onSubmit={submitHandler}>
                    {/* title */}
                    <div className='form-group my-2'>
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

                    {/* amount */}
                    <div className='form-group my-2'>
                        <div className='row'>
                            <div className='col-5'>
                                <label htmlFor="amount">Amount : </label>
                            </div>
                            <div className='col-7'>
                                <input type="number" name="amount"
                                    onChange={amountChangeHandler}
                                    className="form-control"
                                    min="0.0"
                                    step="0.1" />
                            </div>
                        </div>
                    </div>

                    {/* created at date */}
                    <div className='form-group my-2'>
                        <div className='row'>
                            <div className='col-5'>
                                <label htmlFor="created-at">Created At : </label>
                            </div>
                            <div className='col-7'>
                                <input type="date" name="created-at"
                                    onChange={createdAtChangeHandler}
                                    className="form-control"
                                    min="2019-04-01"
                                    max="2022-12-31" />
                            </div>
                        </div>
                    </div>

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