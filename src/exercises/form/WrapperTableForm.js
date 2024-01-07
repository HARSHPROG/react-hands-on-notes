import React, {useState} from 'react';
import SubmitForm from './SubmitForm';
import RenderTable from './RenderTable';

const WrapperForm = () => {

    const [records, setRecords] = useState([]);

    function getRecords(record) {
        console.log("record", record);
        setRecords([...records, record]);
    }

    return (
        <>
            <SubmitForm getRecords={getRecords}/>
            <RenderTable records={records}/>
        </>
    )
}

export default WrapperForm;