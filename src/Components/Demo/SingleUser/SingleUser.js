import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleUser = () => {

    const params = useParams()
    // console.log("PARAMS : ", params.uid);

    useEffect(() => {
        const FetchUser = async () => {
            try {
                const resp = await fetch("https://jsonplaceholder.typicode.com/users/" + params.uid)
                const data = await resp.json()
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        }
        FetchUser()
    }, [params])

    return (
        <div>
            Single User Loaded...
        </div>
    );
}

export default SingleUser;
