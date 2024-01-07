import React, { useMemo, useState } from "react";

const UseMemoComponent = () => {
    const [add, setAdd] = useState(10);
    const [minus, setMinus] = useState(100);

    function handleAdd() {
        setAdd(prevAdd => prevAdd+1);
    }

    function handleMinus() {
        setMinus(prevMinus => prevMinus-1);
    }

    const mult = useMemo(function multiply() {
        console.log("new multiply", add * 100);
        return add * 100;
    }, [add])

    return (
        <>
            <h1>{mult}</h1>
            <h1> {add} </h1>
            <button onClick={handleAdd}> Addition </button>

            <h1> {minus} </h1>
            <button onClick={handleMinus}> Minus </button>
        </>
    )
}

export default UseMemoComponent;