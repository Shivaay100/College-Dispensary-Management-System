import React from 'react'
import './manageEvent.css'
import DeleteIcon from '@mui/icons-material/Delete';
const ManageEvent = () => {
    return (
        <div className='add-staffs-box'>
            <form className='register-form'>
                <div className=''>
                    <div className='register-input-box'>
                        <input className='input-box-register mngEventInp' type="text" placeholder='Event Name' />
                    </div>

                </div>
                <button type='submit' className='form-btn reg-btn'>Add</button>

            </form>

            <div className='list-staffs'>

                <div className='list-staff'>
                    <div>Blood Donation Camp from 20th April 2026</div>
                    <div className='list-staff-btns'>
                        <div style={{ cursor: "pointer" }}><DeleteIcon /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageEvent