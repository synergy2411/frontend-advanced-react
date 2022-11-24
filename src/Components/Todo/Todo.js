// import "./Todo.css";
import { useState } from "react";
import classes from "./Todo.module.css";
import TodoAction from "./TodoAction/TodoAction";
import TodoItem from "./TodoItem/TodoItem";

const Todo = () => {
    const [todoCollection, setTodoCollection] = useState([]);

    const onAddItem = label => {
        let newItem = { id: "t00" + (todoCollection.length + 1), label }
        setTodoCollection(todos => [newItem, ...todos])
    }

    const onDeleteItem = (todoId) => {
        let filteredTodo = todoCollection.filter(todo => todo.id !== todoId)
        setTodoCollection(filteredTodo)
    }
    return (
        <div className={classes['my-container']}>
            <h1 className={classes['heading']}>Todo App</h1>
            <TodoAction onAddItem={onAddItem} />
            <ul className={classes['list-group']}>
                {todoCollection.map(todo => <TodoItem todo={todo} onDeleteItem={onDeleteItem} />)}
            </ul>
        </div>
    )
}

export default Todo;