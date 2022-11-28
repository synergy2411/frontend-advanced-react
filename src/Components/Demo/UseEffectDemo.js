import { useEffect, useState } from 'react';

const UseEffectDemo = () => {

    const [show, setShow] = useState(false)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        console.log("Without Dependency");
    })

    useEffect(() => {
        console.log("With Empty Dependency");
    }, [])

    useEffect(() => {
        console.log("With 'Toggle' Dependency");
    }, [toggle])


    const showClickHandler = () => setShow(!show);
    const toggleClickHandler = () => setToggle(!toggle);

    return (
        <div>
            <h1>UseEffectDemo works</h1>
            <button className='btn btn-primary' onClick={showClickHandler}>Show</button>
            <button className='btn btn-success' onClick={toggleClickHandler}>Toggle</button>
            {show && <p>This paragraph will be show/hide</p>}
            {toggle && <p>This paragraph will be toggle</p>}
        </div>
    )
}

export default UseEffectDemo;