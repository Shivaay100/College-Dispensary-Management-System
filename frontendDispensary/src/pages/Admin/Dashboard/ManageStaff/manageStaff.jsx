import React,{useState} from 'react'
import './manageStaff.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const ManageStaff = () => {
    const[inputFields,setInputFields] = useState({
        name:"",
        email:"",   
        password:"",
        designation:"",
        mobileNumber:""
    });
 const handleChange = (event,key) => {
    setInputFields({...inputFields,[key]:event.target.value})
 }

  return (
    <div className='add-staffs-box'>
        <form className='register-form'>
            <div className='register-form-div'>
                <div className='register-input-box'>
                    <input value={inputFields.name} className='input-box-register' type="text" placeholder='Staff Name' onChange={(e)=>handleChange(e,"name")} />
                </div>
                <div className='register-input-box'>
                    <input value={inputFields.email} className='input-box-register' type="text" placeholder='Email Id' onChange={(e)=>handleChange(e,"email")} />
                </div>
                <div className='register-input-box'>
                    <input value={inputFields.password} className='input-box-register' type="text" placeholder='Password' onChange={(e)=>handleChange(e,"password")} />
                </div>
                <div className='register-input-box'>
                    <input value={inputFields.designation} className='input-box-register' type="text" placeholder='Designation' onChange={(e)=>handleChange(e,"designation")} />
                </div>
                <div className='register-input-box'>
                    <input value={inputFields.mobileNumber} className='input-box-register' type="text" placeholder='Mobile Number' onChange={(e)=>handleChange(e,"mobileNumber")} />
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