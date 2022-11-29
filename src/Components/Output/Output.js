import React, { useState } from 'react';

const Output = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>The output component loaded</h1>
            <button role="button" onClick={() => setShow(true)}>Show</button>

            {show && <p>Jest is testing library</p>}

            {!show && <p>The Testing Demo</p>}
        </div>
    );
}

export default Output;
