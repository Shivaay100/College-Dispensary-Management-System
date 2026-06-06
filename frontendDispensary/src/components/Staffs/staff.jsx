import React, { use, useEffect, useState } from 'react'
import './staff.css'
import TableComp from '../Table/tableComp'
import axios from 'axios'

const Staff = (props) => {
  const staffHeader = ["Name", "Designation", "Email Id", "Contact No."]

  const [rowData,setRowData] = useState([])

  const getFormattedData = (data) => {
    let newarr = data.map((item) => {
      return {
        name: item.name,
        designation: item.designation,
        email: item.email,
        contactNo: item.mobileNo
      }
    })
    setRowData(newarr);
  }
  
  const fetchData = async () => {
      props.showLoader();
      await axios.get('http://localhost:4000/api/auth/get-staff').then((respnse)=>{
       
        getFormattedData(respnse.data.staffs)
      }).catch (err=> {
        console.log(err)  
      }).finally(()=>{
        props.hideLoader()
      })
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className='staff'>
      <TableComp header={staffHeader} data={rowData} />
    </div>
  )
}

export default Staff