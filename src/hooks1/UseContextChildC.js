import React, { useContext } from 'react';
import {data, data1} from './UseContext.js';

const UseContextChildC = () => {
    const name = useContext(data);
    const gender = useContext(data1);

    return (
        <>
        <h1> Name {name} gender {gender}</h1>
        </>
    );
}

export default UseContextChildC;