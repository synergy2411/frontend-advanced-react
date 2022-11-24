import { useState, useRef } from "react";

const Login = () => {

    const [enteredEmail, setEnteredEmail] = useState('Hello There');
    const passwordInputRef = useRef();

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const clickHandler = (event) => {
        event.preventDefault();
        console.log("EMAIL : ", enteredEmail);                          // << Controlled
        console.log("PASSWORD : ", passwordInputRef.current.value);     // << Uncontrolled
    }
    return (
        <form>
            {/* email */}
            {/* Controlled Component */}
            <input type="email" placeholder="enter email pls..."
                onChange={emailChangeHandler} value={enteredEmail} />

            {/* password */}
            {/* Uncontrolled Component */}
            <input type="password" placeholder="enter password here..."
                ref={passwordInputRef} />

            {/* button */}
            <button onClick={clickHandler}>Login</button>
        </form>
    )
}

export default Login;