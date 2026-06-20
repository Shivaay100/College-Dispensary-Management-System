import React, { useState, useEffect } from 'react'
import './nearByModal.css'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const NearByModal = (props) => {
    const [inputFields, setInputFields] = useState({
        name: "",
        address: "",
        contactNo: ""
    });

    const handleOnChange = (e, field) => {
        setInputFields({ ...inputFields, [field]: e.target.value });
    };

     useEffect(() => {
        if (props.clickedItem) {
            setInputFields({ ...inputFields, name: props.clickedItem.name, address: props.clickedItem.address, contactNo: props.clickedItem.contactNo })
        }
    }, [])

    const updateFunc = async () => {
        await axios.put(`http://localhost:4000/api/hospital/update/${props.clickedItem._id}`, inputFields, { withCredentials: true }).then((resp) => {
            window.location.reload();
        }).catch(err => {
            toast.error(err?.response?.data?.error)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputFields.name.trim().length === 0 || inputFields.address.trim().length === 0 || inputFields.contactNo.trim().length === 0) return toast.error("Enter all the fields")
        if (props.clickedItem){
            updateFunc();
            return;
        }
        await axios.post('http://localhost:4000/api/hospital/add', inputFields, { withCredentials: true }).then((resp) => {
            window.location.reload();
        }).catch(err => {
            toast.error(err?.response?.data?.error)
        })
    }
    return (
        <form className='register-form' onSubmit={handleSubmit}>
            <div className='register-form-div'>
                <div className='register-input-box'>
                    <input
                        value={inputFields.name}
                        className='input-box-register'
                        type="text"
                        placeholder='Name'
                        onChange={(e) => handleOnChange(e, "name")}
                    />
                </div>
                <div className='register-input-box'>
                    <input
                        value={inputFields.address}
                        className='input-box-register'
                        type="text"
                        placeholder='Address'
                        onChange={(e) => handleOnChange(e, "address")}
                    />
                </div>
                <div className='register-input-box'>
                    <input
                        value={inputFields.contactNo}
                        className='input-box-register'
                        type="text"
                        placeholder='Contact No.'
                        onChange={(e) => handleOnChange(e, "contactNo")}
                    />
                </div>
            </div>
            <button type='submit' className='form-btn reg-btn' >{props.clickedItem ? "Update" : "Add"}</button>
            <ToastContainer />
        </form>
    )
}

export default NearByModal
