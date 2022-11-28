import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SingleUser from '../SingleUser/SingleUser';

const Users = () => {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        const fetchUsers = async () => {
            const resp = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await resp.json()
            setUsers(data);
        }
        fetchUsers()
    }, [])

    const moreInfoClickHandler = (userId) => navigate("/users/" + userId)

    return (
        <div>
            <p> Users Component Loaded...</p>
            <ul>
                {users.map(u => <li key={u.id}>{u.name} - {u.email}
                    <button className='btn btn-sm'
                        onClick={() => moreInfoClickHandler(u.id)}
                    >More Details</button>
                </li>)}
            </ul>

            <Routes>
                <Route path="/:uid" element={<SingleUser />} />
            </Routes>
        </div>
    );
}

export default Users;


// http://localhost:3000/users
// http://localhost:3000/users/101/abc/apple