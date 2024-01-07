import React, {useState} from 'react';

function FunctionalTest () {

    const [toggle, setToggle] = useState(false);

    function handleToggle() {

        setToggle(prevToggle => !prevToggle);
    }
    return (
        <>
            <p> Hi There </p>
            <button onClick={handleToggle}> Click me</button>
            {toggle && <p> Toggle {toggle} </p>}
        </>
    )
}

export default FunctionalTest;