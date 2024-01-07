import React, {useState} from 'react';

const SubmitForm = ({getRecords}) => {

    const [formObj, setFormObj] = useState({
        firstName: '',
        email: ''
    }); 

    const handleInput = e => {
        setFormObj({
            ...formObj, 
            [e.target.name]: e.target.value
            })
    }

    const handleSubmit = e => {
        e.preventDefault();

        getRecords(formObj);
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="firstName"> First Name </label>
            <input type="text" name="firstName" id="firstName" value={formObj.firstName} onChange={handleInput} />
        
            <label htmlFor="email"> Email </label>
            <input type="email" name="email" id="email" value={formObj.email} onChange={handleInput} />
        
            <button> Submit </button>
        </form>
    )
}

export default SubmitForm;