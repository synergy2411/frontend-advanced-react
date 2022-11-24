import React from 'react';
import classes from './TodoItem.module.css';
const TodoItem = (props) => {
    return (
        <li className={classes['my-list']}>
            <p className={classes["paragraph"]}>{props.todo.label.toUpperCase()}</p>
            <button className={classes["btn-delete"]}
                onClick={() => props.onDeleteItem(props.todo.id)}>DELETE</button>
        </li>
    );
}

export default TodoItem;
