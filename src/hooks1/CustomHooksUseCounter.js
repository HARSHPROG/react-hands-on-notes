import React, {useState} from 'react';

const useCounter = () => {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    return [count, incrementCount, decrementCount];
}

export default useCounter;