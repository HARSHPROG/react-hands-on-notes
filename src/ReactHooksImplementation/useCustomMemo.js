import {useRef, useEffect} from 'react';

const areEqual = (prevDeps, newDeps) => {

    if(prevDeps === null) return false;
    if(prevDeps.length !== newDeps.length) {
        return false;
    }

    for(let i=0; i<prevDeps.length; i++) {
        if(prevDeps[i] !== newDeps[i]) {
            return false;
        }
    }

    return true;
}

const UseCustomMemo = (cb, deps) => {
    // basic principle: if passed dependency value change, then we need to invoke cb
    // return value is a memoised value

    // Implementation:
    // 1. Check or compare values passed as dependency whether they have changed
    //  1.a To check these we need to persist dependency values till the component unmounts. For this useRef hooks will be used.
    
    const memoisedValue = useRef(null);

    if (!memoisedValue.current || !areEqual(memoisedValue.current.deps, deps)) {
        memoisedValue.current = {
            value: cb(),
            deps
        }
    }

    // cleanup logic
    useEffect(() => {
        return () => {
            memoisedValue.current = null;
        }
    }, [])
    return memoisedValue.current.value;

}

export default UseCustomMemo;