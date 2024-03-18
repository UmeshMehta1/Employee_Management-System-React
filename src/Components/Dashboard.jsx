import React, { useState } from 'react'
import Add from './Add.jsx'
import Edit from './Edit.jsx';
import List from './List.jsx';
// import Delete from './Delete.jsx';
import Header from './Header.jsx';
import { employeesData } from '../data/employeesData.js';


function Dashboard() {
    const[employees, setEmployees]=useState(employeesData);
    const[selectEmployee, setSelectEmployee]=useState(null);
    const[isAdding, setIsAdding]=useState(false)
    const[isEditing,setIsEditing]=useState(false)


    const handelDelete =(id)=>{
      
      const updatedEmployees = employees.filter(employee => employee.id !== id);
      setEmployees(updatedEmployees);
        
    }

    const handelEdit=(id)=>{
      const [employee] = employees.filter(employee=> employee.id==id)
      setSelectEmployee(employee)
      setIsEditing(true)
    }

  return (
    
    <div>
      {/* list */}      

        {!isAdding && !isEditing && (
          <>
          <Header setIsAdding={setIsAdding}/><br></br>

          <List employees={employees}  handelEdit={handelEdit} handelDelete={handelDelete} />
          </>
        
         )}

         {/* Add */}

         {isAdding && (
          <>
          <Add setEmployees={setEmployees} employees={employees} setIsAdding={setIsAdding} />
          </>
         ) }


         {/* Edit */}

         {isEditing && (
          <Edit selectEmployee={selectEmployee} setSelectEmployee={setSelectEmployee} employees={employees} setIsEditing={setIsEditing} setEmployees={setEmployees}  />
         )}

         

    

    </div>
  )
}

export default Dashboard