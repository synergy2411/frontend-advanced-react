import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as fromActions from '../../store/actions/actions';

const Counter = () => {
    const counter = useSelector(store => store.counter);
    const dispatch = useDispatch()

    const increaseClickHandler = () => {
        dispatch({ type: fromActions.INCREMENT })
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
                <button className='btn btn-success'
                    onClick={() => dispatch({ type: fromActions.DECREMENT })}>
                    Decrease
                </button>
                <button className='btn btn-dark'
                    onClick={() => dispatch(fromActions.onAddCounter(10))}>
                    Add - 10</button>
                <button className='btn btn-warning'
                    onClick={() => dispatch(fromActions.onSubtractCounter(5))}>
                    Subtract - 5</button>
            </div>
        </div>
    );
}

export default Counter;
