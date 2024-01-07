import React, { useCallback, useState } from 'react';
import ChildA from './UseCallbackChildA';

const ComponentUseCallback = () => {
    const [add, setAdd] = useState(0);
    // const learning = () => {

    // }

    const learning = useCallback(() => {

    }, [])

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1> Learning ComponentUseCallback </h1>
            <ChildA learning={learning} count={count}/>
            <h1>{add}</h1>
            <button onClick={() => setAdd(add+1)}> Addition </button>

            <h1>{count}</h1>
            <button onClick={() => setCount(count+2)}> Count </button>
        </div>

    )
}

export default ComponentUseCallback;
