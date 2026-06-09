import React, { useState, useEffect } from 'react'
import './manageStaff.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
const ManageStaff = (props) => {
    const [inputFields, setInputFields] = useState({
        name: "",
        email: "",
        password: "",
        designation: "",
        mobileNumber: ""
    });
    const [staffs, setStaffs] = useState([])
    const [clickedStaff, setClickedStaff] = useState(null);
    const handleChange = (event, key) => {
        setInputFields({ ...inputFields, [key]: event.target.value })
    }


    const fetchData = async () => {
        props.showLoader()
        await axios.get('http://localhost:4000/api/auth/get-staff').then((respnse)=>{
            setStaffs(respnse.data.staffs)
        }).catch (err=> {
            console.log(err)  
        }).finally(()=>{
            props.hideLoader()
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleUpdate = async () => {

        await axios.put(`http://localhost:4000/api/auth/update-staff/${clickedStaff?._id}`, inputFields, { withCredentials: true }).then(response => {
            window.location.reload();
        }).catch(err => {
            toast.error(err?.response?.data?.error)

        })
    }

    const handleAddStaff = async (e) => {
        e.preventDefault()

        if (clickedStaff) {
            handleUpdate();
            return;
        }

        if (inputFields.name.trim().length === 0 || inputFields.email.trim().length === 0 || inputFields.password.trim().length === 0 || inputFields.designation.trim().length === 0 || inputFields.mobileNumber.trim().length === 0) return toast.error("Please fill all the details.");
        props.showLoader()
        await axios.post("http://localhost:4000/api/auth/add-staff", inputFields, { withCredentials: true }).then((response) => {
            toast.success(response.data.message)
            setStaffs([inputFields, ...staff])
            setInputFields({ name: "", email: "", password: "", designation: "", mobileNumber: "" })
        }).catch((err) => {
            console.log(err)
            toast.error(err?.response?.data?.error)
        }).finally(() => {
            props.hideLoader()
        })
    }

    const handleOnEditBtn = async (item) => {
        setClickedStaff(item);
        setInputFields({ ...inputFields, ...item })
    }

    const filterOutData = (id) => {
        let newArr = staffs.filter((item) => item?._id !== id);
        setStaffs(newArr)
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:4000/api/auth/delete-staff/${id}`, { withCredentials: true }).then((response) => {
           filterOutData(id)
        }).catch((err) => {
            toast.error(err?.response?.data?.error)
        })
    }

    return (
        <div className='add-staffs-box'>
            <form className='register-form'>
                <div className='register-form-div'>
                    <div className='register-input-box'>
                        <input value={inputFields.name} className='input-box-register' type="text" placeholder='Staff Name' onChange={(e) => handleChange(e, "name")} />
                    </div>
                    <div className='register-input-box'>
                        <input value={inputFields.email} disabled={clickedStaff} className='input-box-register' type="text" placeholder='Email Id' onChange={(e) => handleChange(e, "email")} />
                    </div>
                    {
                       !clickedStaff && <div className='register-input-box'>
                        <input value={inputFields.password} className='input-box-register' type="text" placeholder='Password' onChange={(e) => handleChange(e, "password")} />
                    </div>
                    }
                    <div className='register-input-box'>
                        <input value={inputFields.designation} className='input-box-register' type="text" placeholder='Designation' onChange={(e) => handleChange(e, "designation")} />
                    </div>
                    <div className='register-input-box'>
                        <input value={inputFields.mobileNumber} className='input-box-register' type="text" placeholder='Mobile Number' onChange={(e) => handleChange(e, "mobileNumber")} />
                    </div>
                </div>
                <button type='submit' className='form-btn reg-btn' onClick={handleAddStaff}>{!clickedStaff ? "Add" : "Update"}</button>

            </form>

            <div className='list-staffs'>
                
                 {
                    staffs.map((item,index) => {
                        return (
                            <div className='list-staff'>
                                <div>{item.name}</div>
                                <div className='list-staff-btns'>
                                    <div onClick={()=>handleOnEditBtn(item)} style={{cursor: "pointer" }}><EditIcon /></div>
                                    <div onClick={()=>handleDelete(item._id)} style={{cursor: "pointer" }}><DeleteIcon /></div>
                                </div>
                            </div>
                        )
                    })
                 }

                
            </div>
            <ToastContainer />
        </div>
    )
}

export default ManageStaff