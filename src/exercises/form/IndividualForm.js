import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const updateFirstName = e => {
    setFirstName(e.target.value);
  }

  const updateLastName = e => {
    setLastName(e.target.value);
  }

  const updatePhone = e => {
    setPhone(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("in handleSubmit");

    const newFormObject = {
      'firstName': firstName,
      'lastName': lastName,
      'phone': phone
    };

    
    setFirstName("");
    setLastName("");
    setPhone("");
    addEntryToPhoneBook(newFormObject);

  }
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        onChange={updateFirstName}
        value={firstName}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        onChange={updateLastName}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        onChange={updatePhone}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({records}) {

  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
        <tbody>
      {records && records.map((record, idx) => {
         return (<tr key={idx}> 
                    <td style={style.tableCell}> {record['firstName']} </td>
                    <td style={style.tableCell}> {record['lastName']} </td>
                    <td style={style.tableCell}> {record['phone']} </td>
                </tr>)
      })}
      </tbody>
    </table>
  );
}

function Application(props) {

  const [records, setRecords] = useState([]);

  function addEntryToPhoneBook(formObj) {
    console.log("in Application", formObj);

    setRecords([...records, formObj]);
  }
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
      <InformationTable records={records}/>
    </section>
  );
}
export default Application;