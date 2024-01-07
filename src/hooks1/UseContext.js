import React, { createContext } from 'react';
import UseContextChildA from './UseContextChildA';

// What is useContext hook
// createContext, provider, useContext
// How to use it

const data = createContext();
const data1 = createContext();

const UseContext = () => {
    const name = "harsh";
    const gender = "male";

    return (
        <data.Provider value={name}>
            <data1.Provider value={gender}>
                <UseContextChildA />
            </data1.Provider>
        </data.Provider>
    );
}

export {data, data1};
export default UseContext;