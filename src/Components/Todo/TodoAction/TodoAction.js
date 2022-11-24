import React, { useState } from 'react';
import classes from './TodoAction.module.css';

const TodoAction = (props) => {

    const [enteredLabel, setEnteredLabel] = useState('');

    const labelChangeHandler = event => setEnteredLabel(event.target.value);

    const clickHandler = () => props.onAddItem(enteredLabel)

    return (
        <div className={classes['action-box']}>
            <input type="text" onChange={labelChangeHandler} className={classes['todo-input']} />
            <button className={classes['todo-button']} onClick={clickHandler}>Add</button>
        </div>
    );
}

export default TodoAction;
