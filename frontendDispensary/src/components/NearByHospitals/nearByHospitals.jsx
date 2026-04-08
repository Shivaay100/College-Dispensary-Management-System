import React from 'react'
import './nearByHospitals.css'
import TableComp from '../Table/tableComp'

const NearByHospitals = () => {

  const hospitalheaders = ["Sn No.", "Name", "Address", "Contact No."]

  const rowData = [
    {
      sno: "1",
      name: "Apollo Hospital",
      address: "123 Main Street, Cityville",
      contact: "9876543210"
    },
    {
      sno: "2",
      name: "City Medical Center",
      address: "456 Elm Street, Townsville",
      contact: "9123456780"
    }
  ]

  return (
    <div className="nearby-container">
  
      <div className="nearby-title">
        Nearby Hospitals
      </div>
  
      <div className="nearby-table">
        <TableComp header={hospitalheaders} data={rowData} />
      </div>
  
    </div>
  )
}

export default NearByHospitals