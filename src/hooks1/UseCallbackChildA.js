import React, {memo} from 'react';

const ChildA = ({learning, count}) => {

    console.log("render Child Component");
    return (
        <>

        </>
    );
}

export default memo(ChildA);