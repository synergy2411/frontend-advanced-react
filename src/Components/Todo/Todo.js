import { useState } from "react";
import TodoAction from "./TodoAction/TodoAction";
import TodoItem from "./TodoItem/TodoItem";

const Todo = () => {

    const [todos, setTodos] = useState([])

    const addTodo = label => {
        let newTodo = {
            id: "t00" + (todos.length + 1),
            label
        }
        setTodos((prevTodos) => [newTodo, ...prevTodos])
    }

    const deleteTodo = todoId => {
        const filteredTodoArray = todos.filter(t => t.id !== todoId)
        setTodos(filteredTodoArray);
    }
    return (
        <div className="container">
            <h1>My Todos</h1>
            <TodoAction addTodo={addTodo} />
            <br />
            {todos.map((todo) => <TodoItem key={todo.id} deleteTodo={deleteTodo} todo={todo} />)}
        </div>
    )
}

export default Todo;