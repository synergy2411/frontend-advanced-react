const TodoItem = (props) => {

    const deleteHandler = () => {
        props.deleteTodo(props.todo.id)
    }
    return (
        <div>
            <p>{props.todo.label.toUpperCase()}</p>
            <button onClick={deleteHandler}>DELETE</button>
        </div>
    )

}

export default TodoItem;