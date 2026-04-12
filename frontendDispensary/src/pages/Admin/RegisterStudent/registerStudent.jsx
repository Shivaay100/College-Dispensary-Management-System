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

    // const [studentDetail, setStudentDetail] = useState({ _id: "",email:"" ,name: "", roll: "", mobileNo: "", fatherName: "", fatherMobile: "", address: "", previous_health: "", age: "", bloodGroup: "" });
    
    // const handleOnChangeInputField = (event, key) => {
    //     setStudentDetail({ ...studentDetail, [key]: event.target.value })
    // }

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
                        <input className='input-box-register' type="text" placeholder='Student Name' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="email" placeholder='Email' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Registration No.' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Mobile No.' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Fathers Name' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Father Mobile No.' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Address' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Previous health issue' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Age' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Blood Group' />
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