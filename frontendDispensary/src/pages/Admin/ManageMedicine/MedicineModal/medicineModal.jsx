import React from 'react'
import './medicineModal.css'
const MedicineModal = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='register-form-div'>
                <div className='register-input-box'>
                    <input className='input-box-register' type="text" placeholder='Medicine Name' />
                </div>
                <div className='register-input-box'>
                    <input className='input-box-register' type="text" placeholder='Quantity' />
                </div>
                <div className='register-input-box'>
                    <input className='input-box-register' type="text" placeholder='Usage' />
                </div>
            </div>
            <button type='submit' className='form-btn reg-btn' >Add</button>
        </form>
    )
}

export default MedicineModal