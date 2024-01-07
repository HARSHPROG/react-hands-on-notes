import React, {useEffect, useState} from 'react';

const setThemeList = ({getItems}) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        setList(getItems());
    }, [getItems])
    return list && list.map((item) => {
            <div key={item}> {item} </div>
        })
}
