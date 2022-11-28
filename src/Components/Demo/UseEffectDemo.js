import { useEffect, useState } from 'react';

const UseEffectDemo = () => {

    const [show, setShow] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     console.log("Without Dependency");
    // })

    // useEffect(() => {
    //     console.log("With Empty Dependency");
    // }, [])

    // useEffect(() => {
    //     console.log("With 'Toggle' Dependency");
    //     return () => {                              // << CLEAN UP FUNCTION
    //         console.log("Clean up");
    //     }
    // }, [toggle])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            console.log(data);
            setPosts(data);
        }
        fetchPosts();
    }, [])


    const showClickHandler = () => setShow(!show);
    const toggleClickHandler = () => setToggle(!toggle);

    return (
        <div>
            <h1>UseEffectDemo works</h1>
            <button className='btn btn-primary' onClick={showClickHandler}>Show</button>
            <button className='btn btn-success' onClick={toggleClickHandler}>Toggle</button>
            {show && <p>This paragraph will be show/hide</p>}
            {toggle && <p>This paragraph will be toggle</p>}
            <hr />
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default UseEffectDemo;


// const numbers = [2,3,4,5];
// const newArr = numbers.map(v => v * 2)
// console.log(newArr);            // [4,6,8,10]