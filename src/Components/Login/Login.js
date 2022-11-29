import { useState, useRef } from "react";

const Login = () => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [userRegistered, setUserRegistered] = useState(false)
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    const passwordInputRef = useRef();

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const loginClickHandler = async (event) => {
        event.preventDefault();
        try {
            const resp = await fetch("http://localhost:3030/users")
            const data = await resp.json();
            const position = data.findIndex(user => user.username === enteredEmail && user.password === passwordInputRef.current.value)
            if (position >= 0) {
                setUserLoggedIn(true)
            } else {
                setUserLoggedIn(false)
            }
        } catch (err) {
            console.log(err);
        }

        // console.log("EMAIL : ", enteredEmail);                          // << Controlled
        // console.log("PASSWORD : ", passwordInputRef.current.value);     // << Uncontrolled
    }

    const signupClickHandler = async (event) => {
        event.preventDefault()
        let newUser = {
            username: enteredEmail,
            password: passwordInputRef.current.value
        }
        try {
            const resp = await fetch("http://localhost:3030/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            const data = await resp.json();
            console.log(data);
            setUserRegistered(true)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <form>
                {/* email */}
                {/* Controlled Component */}
                <input type="email" placeholder="enter email pls..."
                    onChange={emailChangeHandler} value={enteredEmail} />

                {/* password */}
                {/* Uncontrolled Component */}
                <input type="password" placeholder="enter password here..."
                    ref={passwordInputRef} />
                <br />
                {/* button */}
                <button onClick={loginClickHandler} className="btn btn-primary">Login</button>
                <button onClick={signupClickHandler} className="btn btn-success">Sign up</button>

                <hr />
                {userRegistered && <p>User registered successfully</p>}
                {userLoggedIn && <p>Authenticated User</p>}
                {!userLoggedIn && <p>Bad Credentials</p>}
            </form>
        </div>
    )
}

export default Login;