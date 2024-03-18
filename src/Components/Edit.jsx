import React,{useState} from 'react'

function Edit({selectEmployee,employees, setEmployees, setIsEditing}) {
  const id= selectEmployee.id;

  const [firstName, setFirstName]=useState(selectEmployee.firstName)
    const [lastName, setLastName]=useState(selectEmployee.lastName)
    const [email, setEmail]=useState(selectEmployee.email)
    const [phoneNumber,setPhoneNumber]=useState(selectEmployee.phoneNumber)

    const onHandleUpdate=(e)=>{
      e.preventDefault()

      const employee={
        id,
        firstName,
        lastName,
        email,
        phoneNumber
      }
     
      for(let i=0;i<employees.length;i++){
        if(employees[i].id==id){
          employees.splice(i,1,employee)
          break
        }
        
      }
      setEmployees(employees)
      setIsEditing(false)
      

    }

  return (
    <div>
     <h2>Employee Form</h2>

     {/* onSubmit={onHandleUpdate} */}
    <form >
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

            {/* <button type="submit" value="Update" >Update</button> */}
            <input type="submit" onClick={onHandleUpdate} value="Update" />
            <button type="button" value="cancel"  onClick={()=>setIsAdding(false)} >Cencel</button>
        </div>
    </form>

    </div>
  )
}

export default Edit