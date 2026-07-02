import React, { useState, useEffect } from 'react'
import './studentDashboard.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from '../../components/Modal/modal';
import StudentModal from './StudentModal/studentModal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const StudentDashboard = (props) => {
    let userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
    const [history, setHistory] = useState([]);
    const [selectedHistory, setSelectedHistory] = useState(null)

    const [modal, setModal] = useState(false);

    const fetchData = async () => {
        props.showLoader();

        await axios.get(`http://localhost:4000/api/history/get?roll=${userInfo?.roll}`, { withCredentials: true }).then(resp => {
            console.log(resp)
            setHistory(resp.data.history)
        }).catch(err => {
            toast.error(err?.response?.data?.error)
        }).finally(() => {
            props.hideLoader()
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleOnOfModal = (item) => {
        setModal(prev => !prev)
        setSelectedHistory(item ? item : null)
    }

    return (
        <div className='student-dashboard'>
            <div className='student-info'>
               <div className="welcome-user">Welcome,<span> {userInfo?.name}</span></div>
               <div className="welcome-user">{userInfo?.roll}</div>
               <div className="welcome-user">{userInfo?.email}</div>

            </div>

            <div className='student-data'>
                <div className='student-data-header'>
                    <div className='student-header-title'>View</div>
                    <div className='student-header-title'>Date</div>

                </div>

                <div className='student-row-items'>
                    {
                        history.map((item, index) => {
                            return (
                                <div className='student-row-item' key={index}>
                                    <div  onClick={() => handleOnOfModal(item)}><RemoveRedEyeIcon sx={{ cursor: 'pointer' }} /></div>
                                    <div>{item?.createdAt.slice(0, 10).split("-").reverse().join("-")}</div>
                                </div>
                            );
                        })
                            
                        }
                    

                </div>
            </div>
            {modal && <Modal header={"Details"} handleClose={handleOnOfModal} children={<StudentModal selectedHistory={selectedHistory} />} />}
            <ToastContainer />
        </div>
    )
}

export default StudentDashboard