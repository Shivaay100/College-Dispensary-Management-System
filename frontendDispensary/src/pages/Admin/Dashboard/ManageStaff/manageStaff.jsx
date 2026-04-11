import React from 'react'
import './manageStaff.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const ManageStaff = () => {
  return (
    <div className='add-staffs-box'>
        <form className='register-form'>
            <div className='register-form-div'>
                <div className='register-input-box'>
                    <input className='input-box-register' type="text" placeholder='Staff Name' />
                </div>
                <div className='register-input-box'>
                    <input className='input-box-register' type="text" placeholder='Email Id' />
                </div>
                <div className='register-input-box'>
                    <input className='input-box-register' type="text" placeholder='Password' />
                </div>
                <div className='register-input-box'>
                    <input className='input-box-register' type="text" placeholder='Designation' />
                </div>
                <div className='register-input-box'>
                    <input className='input-box-register' type="text" placeholder='Mobile Number' />
                </div>
            </div>
            <button type='submit' className='form-btn reg-btn'>Add</button>

        </form>

        <div className='list-staffs'>

            <div className='list-staff'>
                <div>Saurav</div>
                <div className='list-staff-btns'>
                    <div style={{cursor:"pointer"}}><EditIcon /></div>
                    <div style={{cursor:"pointer"}}><DeleteIcon /></div>
                </div>
            </div>

            <div className='list-staff'>
                <div>Shashi</div>
                <div className='list-staff-btns'>
                    <div style={{cursor:"pointer"}}><EditIcon /></div>
                    <div style={{cursor:"pointer"}}><DeleteIcon /></div>
                </div>
            </div>

            <div className='list-staff'>
                <div>Shivam</div>
                <div className='list-staff-btns'>
                    <div style={{cursor:"pointer"}}><EditIcon /></div>
                    <div style={{cursor:"pointer"}}><DeleteIcon /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageStaff