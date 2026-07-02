import React, { useState } from 'react'
import './registerStudent.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import SearchBox from '../../../components/SearchBox/searchBox';
import Modal from '../../../components/Modal/modal';
import Report from './Report/report';
import {toast,ToastContainer} from 'react-toastify'
import axios from 'axios';

const RegisterStudent = (props) => {
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
    const handleSearch = async ()=>{
        if(searchStudent.trim().length === "")

          return  toast.error("Please enter a registration number to search.");
          props.showLoader();
          await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/get-student-by-roll/${searchStudent}`,{withCredentials:true}  ).then((resp)=>{
            console.log(resp)
            toast.success(resp?.data?.message);
            setStudentDetail(...studentDetail,...resp.data.student);
             })
            .catch((err)=>{
                setStudentDetail({ _id: "",email:"" ,name: "", roll: "", mobileNo: "", fatherName: "", fatherMobile: "", address: "", previous_health: "", age: "", bloodGroup: "" });
                toast.error(err?.response?.data?.error);
            }).finally(()=>{
                props.hideLoader();
            })

           
        
    }

    const handleUpdateFunc = async()=>{
        props.showLoader();
        const { _id,updateAt,...student} = {...studentDetail};
        await axios.put(`${import.meta.env.VITE_API_URL}/api/auth/update-student/${studentDetail._id}`,student,{withCredentials:true}).then((resp)=>{
            console.log(resp)
            toast.success(resp.data.message);
        }).catch((err)=>{
            toast.error(err?.response?.data?.error);
        }).finally(()=>{
            props.hideLoader();
        })
    }

    const registerStudent = async()=>{
        if(studentDetail.name.trim()===0 || studentDetail.roll.trim()===0 || studentDetail.email.trim()===0 || studentDetail.mobileNo.trim()===0 || studentDetail.fatherName.trim()===0 || studentDetail.fatherMobile.trim()===0 || studentDetail.address.trim()===0 || studentDetail.previous_health.trim()===0 || studentDetail.age.trim()===0 || studentDetail.bloodGroup.trim()===0){
            return toast.error("Please fill all the fields.");
            props.hideLoader();
            await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/registerStudentByStaff`,studentDetail,{withCredentials:true}).then((response)=>{
              toast.success(response.data.message);
            }).catch((err)=>{
                console.log(err)
                setStudentDetail({ _id: "",email:"" ,name: "", roll: "", mobileNo: "", fatherName: "", fatherMobile: "", address: "", previous_health: "", age: "", bloodGroup: "" });
                toast.error(err?.response?.data?.error);
            }).finally(()=>{
                props.hideLoader();
            })
        }
    }

  return (
    
    <div className='register-student'>
        <div className='go-back'>
            <Link to={'/admin/dashboard'}><ArrowBackIcon />
            Back To Dashboard</Link>
        </div>

        <SearchBox handleClick={handleSearch} placeholder={"Search By Registration No."} value={searchStudent} onChange={handleOnChange} />
        <div className='register-form-block'>
            <div className='register-form-header'>Register Student</div>
            <form className='register-form' onSubmit={handleSubmit}>
                <div className='register-form-div'>
                    <div className='register-input-box'> 
                        <input disabled={studentDetail?._id} value={studentDetail.name} className='input-box-register' type="text" placeholder='Student Name' onChange={(e) => handleOnChangeInputField(e, "name")} />
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
                {
                    studentDetail?._id?
                    <div className='block-divs'>
                        <button type='submit' className='form-btn reg-btn'onClick={handleUpdateFunc} >Update</button>
                        <button type='button' className='form-btn report-btn' onClick={openCloseModal}>Report</button>
                    </div>
                    :<button type='submit' className='register-btn' onClick={registerStudent}>Register</button>
                }
            </form>

        </div>
            {reportModal && <Modal handleClose={openCloseModal} header={"Report"} children={<Report studentDetail={studentDetail}/>} />}
            <ToastContainer />
    </div>
  )
}

export default RegisterStudent