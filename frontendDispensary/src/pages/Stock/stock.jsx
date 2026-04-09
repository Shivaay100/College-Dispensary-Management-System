import React, { useState } from 'react'
import './stock.css'
import SearchBox from '../../components/SearchBox/searchBox'
import TableComp from '../../components/Table/tableComp';
const Stock = () => {
    const [medicineName, setMedicineName] = useState("");

    const handleInputChange = (value)=>{
        setMedicineName(value);
    }

    const headers = ["Sr No.", "Name", "Quantity", "Usage"];
    const rowData = [
        {
            srNo: 1,
            name: "Paracetamol",
            quantity: "100",
            usage: "Pain relief and fever reduction"
        }
    ]
  return (
    <div className='stock-page'>
        <SearchBox placeholder="Search Medicines" value={medicineName} onChange={handleInputChange} />
        <div className='stock-page-card'>
            <TableComp header={headers} data={rowData} />
        </div>
    </div>
  )
}

export default Stock