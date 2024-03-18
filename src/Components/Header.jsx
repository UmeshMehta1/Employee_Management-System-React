import React from 'react'

function Header({setIsAdding}) {
  return (
    <div>
      <h1>Employee Management System</h1>
      {/* <button onClick={()=>setIsAdding(true)}>Add</button> */}
      <button onClick={() => setIsAdding(true)}>Add Button</button>
    </div>
  )
}

export default Header