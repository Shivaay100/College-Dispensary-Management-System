import React, { useState } from 'react'
import './studentDashboard.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from '../../components/Modal/modal';
import StudentModal from '../Student/StudentModal/studentModal';

function StudentDashboard() {
    const [modal, setModal] = useState(false);
    const [selectedHistory, setSelectedHistory] = useState(null);

    const handleOnOffModal = (history = null) => {
        setSelectedHistory(history);
        setModal(prev => !prev);
    }
  return (
    <div className='student-dashboard'>
        <div className='student-info'>
            <div className='welcome-user'>Welcome, <span>Student</span></div>
            <div className='student-details'>20233260</div>
            <div className='student-details'>student@example.com</div>
        </div>
      <div className='student-data'>
        <div className='student-data-header'>

            <div className='student-header-title'>View</div>
            <div className='student-header-title'>Date</div>

        </div>

        <div className='student-row-items'> 
            <div className='student-row-item'>
                <div><RemoveRedEyeIcon sx={{ cursor: 'pointer' }} onClick={() => handleOnOffModal({ createdAt: '2026-05-15T00:00:00.000Z' })} /></div>
                <div>2026-05-15</div>
            </div>

            <div className='student-row-item'>
                <div><RemoveRedEyeIcon sx={{ cursor: 'pointer' }} onClick={() => handleOnOffModal({ createdAt: '2026-05-15T00:00:00.000Z' })} /></div>
                <div>2026-05-15</div>
            </div>

        </div>
        </div>
        {modal && <Modal header={"Details"} handleClose={handleOnOffModal} children={<StudentModal selectedHistory={selectedHistory} />} />}
      </div>

       
  )
}

export default StudentDashboard
