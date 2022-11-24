import { useState } from "react";


const TodoAction = (props) => {

    const [enteredLabel, setEnteredLabel] = useState('');

    const labelChangeHandler = event => setEnteredLabel(event.target.value)

    const btnClickHandler = () => {
        props.addTodo(enteredLabel);
    }
    return (
        <div>
            <input type="text" onChange={labelChangeHandler} />
            <button onClick={btnClickHandler}>Add</button>
        </div>
    )
}

export default TodoAction;