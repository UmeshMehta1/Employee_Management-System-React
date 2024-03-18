import React from 'react'

function List({employees,handelEdit,handelDelete}) {

  return (
    <div>
      <h2>Employee List</h2>
    <table>
        <thead>
            <tr>
                <th>S.N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((employee,i)=>{
                return(
                <tr key={employee.id}>
                <td>{i+1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneNumber}</td>
                <td>
                    <button className="edit-btn" onClick={()=>handelEdit(employee.id)}>Edit</button>
                    <button className="delete-btn" onClick={()=>handelDelete(employee.id)}>Delete</button>
                </td>
            </tr>
                )
            })}
            {/* <!-- More rows can be added here --> */}
        </tbody>
    </table>

    </div>
  )
}

export default List