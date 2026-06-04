import React,{useState,useEffect} from 'react'
import './nearByHospitals.css'
import TableComp from '../Table/tableComp'
import axios from 'axios'

const NearByHospitals = () => {

  const hospitalheaders = ["Sn No.", "Name", "Address", "Contact No."]

  const [rowData,setRowData] = useState([]);

  const getFormattedData = (data) => {
    let newarr = data.map((item, ind) => {
      return {
        srNo: ind+1,
        name: item.name,
        address: item.address,
        contact: item.contact
      }
    })
    setRowData(newarr);
  }

  useEffect(() => {
    const fetchData = async () => {
    await axios.get('http://localhost:4000/api/hospital/get').then((response) => {
      getFormattedData(response.data.hospitals)
      //setRowData(response.data.hospitals);
    }).catch((err) => {
      console.log(err);
    })
  }

    fetchData()
  }, [])

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