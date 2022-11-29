import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const counter = useSelector(store => store.counter);
    const dispatch = useDispatch()

    const increaseClickHandler = () => {
        dispatch({ type: "INCREMENT" })
    }

    return (
        <div className='container'>
            <p className='text-center display-4'>
                Counter : {counter}</p>
            <hr />
            <div className='grid'>
                <button className='btn btn-primary'
                    onClick={increaseClickHandler}>
                    Increase</button>
            </div>
        </div>
    );
}

export default Counter;
