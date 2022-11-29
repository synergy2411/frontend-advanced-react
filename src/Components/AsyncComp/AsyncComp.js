import React, { useEffect, useState } from 'react';

const AsyncComp = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await resp.json();
                setPosts(data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchPosts()
    }, [])

    return (
        <div>

            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}

export default AsyncComp;
