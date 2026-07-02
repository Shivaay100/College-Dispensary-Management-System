import React, { useState,useEffect } from 'react'
import './report.css'
import SearchBox from '../../../../components/SearchBox/searchBox'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
import{toast,ToastContainer} from 'react-toastify'

const Report = (props) => {
    const [searchMedicineName, setSearchmedicineName] = useState("")
    const [dropdown, setDropDown] = useState(false);
    const[stocks,setStocks] = useState([]);
    const [data, setData] = useState([])
    const [selectedMedicine, setSelectedMedicine] = useState([]);
    const onChange = (value) => {
        setSearchmedicineName(value)
    }
    
    const fetchData = async () => {
       
        await axios.get(`http://localhost:4000/api/medicine/search?name=${searchMedicineName}`).then((resp) => {
            console.log(resp)
            setData(resp.data.medicines)
          
            setDropDown(true)
        }).catch(err => {
            toast.error(err?.response?.data?.error)
            setDropDown(false)
        })
        
    }

    useEffect(() => {
       
            fetchData();
        
    }, [searchMedicineName]);

    const addMedicine = (item) => { 
        let exist=0;
        selectedMedicine.map((it)=>{
            if(it._id===item._id){
                exist=1;
            }
        })
        item={...item,requiredQuantity:""}
        if(exist===0){
            setSelectedMedicine([...selectedMedicine, item]);
            setSearchmedicineName("");
            setDropDown(false)

        }
    }

    const onChangeHandle=(event,ind)=> {
        const arr=selectedMedicine.map((item,index)=>{
            if(index===ind){
               if(parseInt(item.quantity)<parseInt(event.target.value)){
                toast.error("Required quantity should not be greater than available quantity");
                return {...item}
               }
               return {...item,requiredQuantity:event.target.value}
            }
        })
        setSelectedMedicine(arr);
    }

    const handleDelete = (item) => {
        let arr=selectedMedicine.filter((it)=>it._id!==item);
        setSelectedMedicine(arr);
    }

    const checkInputValid=()=>{
        let invalid=false;
        selectedMedicine.map((item)=>{
            if(item.requiredQuantity.trim().length===0 ){
                invalid=true;
            }
        })
        return invalid;
    }

    const handleSubmit = async()=>{
        if(selectedMedicine.length===0){
            return toast.error("Please select at least one medicine to submit.");
        }
        if(checkInputValid()){
            return toast.error("Please fill in all required fields.")
            await axios.post(`http://localhost:4000/api/history/add`,{roll: props.studentDetail.roll,student: props.studentDetail._id,medicines: selectedMedicine}, {withCredentials:true  }).then((response)=>{
                
                toast.success(response.data.message);
                setTimeout(()=>{
                    props.handleCloseModal();
                },1000)
            }).catch((err)=>{
                toast.error(err?.response?.data?.error);
            }).finally(()=>{
                props.hideLoader();
            })
        }

    }

    return (
        <div className='report-register'>
            <div className='medicine-suggestion-block'>
                <SearchBox value={searchMedicineName} onChange={onChange} placeholder="Search Medicine..." />
                {dropdown && searchMedicineName.trim.length===0 && <div className='report-dropdown'>
                   { data.map((item) =>{
                    return (
                        <div className='report-medicine-drpdown' onClick={() => addMedicine(item)}>
                            {item.name}
                        </div>
                    )
                })}

                </div>
                }
            </div>
            <div className='report-form-rows'>
                <div className='report-form-header'>
                    <div className='col-1-rm'>Medicine Name</div>
                    <div className='col-2-rm'>Quantity Left</div>
                    <div className='col-3-rm'>Required Quantity</div>
                    <div className='col-4-rm'>Delete</div>
                </div>
                <div className='report-form-row-block'>

                    {
                        selectedMedicine.map((item, index) => {
                            return (
                                <div className='report-form-row' key={index}>
                                    <div className='col-1-rm'>{item.name}</div>
                                    <div className='col-2-rm'>{item.quantity}</div>
                                    <div className='col-3-rm'><input  value={selectedMedicine[index].requiredQuantity}type='number' className='input-table' onChange={(event) => {
                                        const newSelectedMedicine = [...selectedMedicine];
                                        newSelectedMedicine[index].requiredQuantity = event.target.value;
                                        setSelectedMedicine(newSelectedMedicine);
                                    }} /></div>
                                    <div className='delete-icon col-4-rm' onClick={() => handleDelete(item._id)}><DeleteIcon /></div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className='modal-submit' onClick={handleSubmit}>
                Submit
            </div>
            <ToastContainer />
        </div>
    )
}

export default Report