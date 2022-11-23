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
        <form onSubmit={submitHandler}>
            {/* title */}
            <label htmlFor="title">Title : </label>
            <input type="text" name="title"
                onChange={titleChangeHandler} />
            <br />

            {/* amount */}

            {/* created at date */}
            <button className='btn btn-success' type='submit'>
                Add</button>
        </form>
    )
}

export default AddExpense;