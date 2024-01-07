import React,  { useRef } from 'react';

const UseRefHook = () => {
    const inputRef = useRef("");

    const onClickHandler = () => {
      inputRef.current?.focus();
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={onClickHandler}>Unlock next input</button>
        </div>
    );
}

export default UseRefHook;