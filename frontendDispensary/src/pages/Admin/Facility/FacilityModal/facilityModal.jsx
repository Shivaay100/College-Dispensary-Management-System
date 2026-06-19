import React, { useState,useEffect } from 'react'
import './facilityModal.css'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const FacilityModal = (props) => {
    const [inputFields, setInputFields] = useState({
        title: "",
        description: ""
    });
    const handleOnChangeInputField = (e, field) => {
        setInputFields({ ...inputFields, [field]: e.target.value });
    }
    useEffect(() => {
        if (props.clickedItem) {
            setInputFields({ ...inputFields, title: props.clickedItem.title, description: props.clickedItem.description });
        }
    }, [])
    const updateFacility = async () => {
        await axios.put(`http://localhost:4000/api/facility/update/${props.clickedItem._id}`, inputFields, { withCredentials: true }).then((resp) => {
            window.location.reload();
        }).catch(err => {
            toast.error(err?.response?.data?.error)
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputFields.title.trim().length === 0 || inputFields.description.trim().length === 0) {
            return toast.error("Please fill all the fields")
        }

        if (props.clickedItem) {
            updateFacility();
            return;
        }
        await axios.post('http://localhost:4000/api/facility/add', inputFields, { withCredentials: true }).then((resp) => {
            window.location.reload();
        }).catch(err => {
            toast.error(err?.response?.data?.error)
        })
    }
    return (
        <div className='facility-modal'>
            <form className='register-form' onSubmit={handleSubmit}>
                <div className=''>
                    <div className='register-input-box'>
                        <input
                            value={inputFields.title}
                            className='input-box-register'
                            type="text"
                            placeholder='Enter Title'
                            onChange={(e) => handleOnChangeInputField(e, "title")}
                        />
                    </div>
                    <div className='register-input-box' style={{ marginTop: 20 }}>
                        <textarea
                            value={inputFields.description}
                            cols={450}
                            rows={5}
                            className='input-box-register'
                            placeholder='Enter Description'
                            onChange={(e) => handleOnChangeInputField(e, "description")}
                        />
                    </div>


                </div>
                <button type='submit' className='form-btn reg-btn' >{props.clickedItem ? "Update" : "Add"}</button>
                <ToastContainer />
            </form>

        </div>
    )
}

export default FacilityModal
