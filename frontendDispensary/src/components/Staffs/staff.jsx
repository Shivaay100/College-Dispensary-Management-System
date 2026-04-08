import React from 'react'
import './staff.css'
import TableComp from '../Table/tableComp'

const Staff = () => {
  const staffHeader = ["Name", "Designation", "Email Id", "Contact No."]

  const rowData = [
    {
      name: "Shivam Kumar",
      designation: "Manager",
      email: "shivampaswan1215225@gmail.com",
      contact: "9631491973"
    }
  ]

  return (
    <div className='staff'>
      <TableComp header={staffHeader} data={rowData} />
    </div>
  )
}

export default Staff