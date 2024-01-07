import React, { useState, useRef } from 'react';

const DummyComponent = () => {
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
};

export default DummyComponent;