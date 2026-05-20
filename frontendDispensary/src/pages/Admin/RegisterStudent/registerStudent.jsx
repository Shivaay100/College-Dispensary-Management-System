import React, { useState } from 'react'
import './registerStudent.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import SearchBox from '../../../components/SearchBox/searchBox';
import Modal from '../../../components/Modal/modal';
import Report from './Report/report';
const RegisterStudent = () => {
    const [searchStudent, setSearchStudent] = useState("");
    const [reportModal, setReportModal] = useState(false)

    const [studentDetail, setStudentDetail] = useState({ _id: "",email:"" ,name: "", roll: "", mobileNo: "", fatherName: "", fatherMobile: "", address: "", previous_health: "", age: "", bloodGroup: "" });
    
     const handleOnChangeInputField = (event, key) => {
       setStudentDetail({ ...studentDetail, [key]: event.target.value })
     }

    const openCloseModal = ()=>{
        setReportModal(prev=>!prev)
    }

    const handleOnChange = (value)=>{
        setSearchStudent(value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    
    <div className='register-student'>
        <div className='go-back'>
            <Link to={'.admin/register-student'}><ArrowBackIcon />
            Back To Dashboard</Link>
        </div>

        <SearchBox placeholder={"Search By Registration No."} value={searchStudent} onChange={handleOnChange} />
        <div className='register-form-block'>
            <div className='register-form-header'>Register Student</div>
            <form className='register-form' onSubmit={handleSubmit}>
                <div className='register-form-div'>
                    <div className='register-input-box'> 
                        <input value={studentDetail.name} className='input-box-register' type="text" placeholder='Student Name' onChange={(e) => handleOnChangeInputField(e, "name")} />
                    </div>
                    <div className='register-input-box'> 
                        <input value={studentDetail.email} className='input-box-register' type="email" placeholder='Email' onChange={(e) => handleOnChangeInputField(e, "email")} />
                    </div>
                    <div className='register-input-box'> 
                        <input value={studentDetail.roll} className='input-box-register' type="text" placeholder='Registration No.' onChange={(e) => handleOnChangeInputField(e, "roll")} />
                    </div>
                    <div className='register-input-box'> 
                        <input value={studentDetail.mobileNo} className='input-box-register' type="text" placeholder='Mobile No.' onChange={(e) => handleOnChangeInputField(e, "mobileNo")} />
                    </div>
                    <div className='register-input-box'> 
                        <input value={studentDetail.fatherName} className='input-box-register' type="text" placeholder='Fathers Name' onChange={(e) => handleOnChangeInputField(e, "fatherName")} />
                    </div>
                    <div className='register-input-box'> 
                        <input value={studentDetail.fatherMobile} className='input-box-register' type="text" placeholder='Father Mobile No.' onChange={(e) => handleOnChangeInputField(e, "fatherMobile")} />
                    </div>
                    <div className='register-input-box'> 
                        <input value={studentDetail.address} className='input-box-register' type="text" placeholder='Address' onChange={(e) => handleOnChangeInputField(e, "address")} />
                    </div>
                    <div className='register-input-box'> 
                        <input value={studentDetail.previous_health} className='input-box-register' type="text" placeholder='Previous health issue' onChange={(e) => handleOnChangeInputField(e, "previous_health")} />
                    </div>
                    <div className='register-input-box'> 
                        <input value={studentDetail.age} className='input-box-register' type="text" placeholder='Age' onChange={(e) => handleOnChangeInputField(e, "age")} />
                    </div>
                    <div className='register-input-box'> 
                        <input value={studentDetail.bloodGroup} className='input-box-register' type="text" placeholder='Blood Group' onChange={(e) => handleOnChangeInputField(e, "bloodGroup")} />
                    </div>

                </div>
                <button type='submit' className='form-btn reg-btn' >Register</button>
                <div className='block-divs'>
                    <button type='' className='form-btn reg-btn' >Update</button>
                    <button type='' className='form-btn reg-btn' onClick={openCloseModal}>Report</button>
                </div>
            </form>

        </div>
            {reportModal && <Modal handleClose={openCloseModal} header={"Report"} children={<Report/>} />}
    </div>
  )
}

export default RegisterStudent