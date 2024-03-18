import React, { useState } from 'react'
import './Style/Add.css'
// import { useRef } from 'react'



function Add({setEmployees, employees, setIsAdding}) {

    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')

    const onHandelAdd =(e)=>{
        e.preventDefault();

        if(!firstName || !lastName || !email || !phoneNumber){
            alert="Please fill the missing field"
        }

        const id = employees.length+1;

        const newEmployee={
            id,
            firstName,
            lastName,
            email,
            phoneNumber
        }

        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);
    }

  return (
   
    <div>
     <h2>Employee Form</h2>
    <form onSubmit={onHandelAdd}>
        <div className="form-group">
            <label htmlFor="first_name">First Name:</label>
            <input type="text" id="first_name" name="first_name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" id="last_name" value={lastName} name="last_name" onChange={(e)=>setLastName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" required/>
        </div>
        <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} name="phone" required/>
        </div>
        <div className="form-group">

            <button type="submit" value="Add" >Add</button>
            <button type="button" value="cancel"  onClick={()=>setIsAdding(false)} >Cencel</button>
        </div>
    </form>

    </div>
  )
}

export default Add