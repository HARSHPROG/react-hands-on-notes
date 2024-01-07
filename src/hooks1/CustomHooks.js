import React from 'react';
import useCounter from './CustomHooksUseCounter';

const CustomHooks = () => {
    
    const [count, incrementCount, decrementCount] = useCounter();
    return (
        <>
            <h1>{count}</h1>

            <button onClick={incrementCount}> Increment </button>
            <button onClick={decrementCount}> Decrement </button>
        </>
    );
}

export default CustomHooks;