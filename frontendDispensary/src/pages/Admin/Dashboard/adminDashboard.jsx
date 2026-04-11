import React, { useState } from 'react'
import './adminDashboard.css'
import Modal from '../../../components/Modal/modal'
import ManageStaff from './ManageStaff/manageStaff'
import ManageEvent from './ManageEvent/manageEvent'
const AdminDashboard = () => {
  const [manageStaffModal, setmanageStaffModal] = useState(false)
  const [eventModal, setEventModal] = useState(false)
  const openCloseModal = (value) => {
    if (value === "event") {
      setEventModal(prev => !prev);
    } else {
      setmanageStaffModal(prev => !prev);
    }
  }

  let userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
  return (
    <div className='adminDashboard'>
        <div className='welcome-header'>
          <div className='welcome-admin'>Welcome To Admin Panel</div>
          <div className='welcome-admin-right-side'>
            <div className='manage-staff-btn' onClick={()=>{openCloseModal("staff")}}>Manage Staffs</div>
            <div className='manage-staff-btn' onClick={()=>{openCloseModal("event")}}>Events</div>
          </div>
        </div>

        <div className='admin-dashboard-cards'>
          <div className='admin-dashboard-card'>Register Student</div>
          <div className='admin-dashboard-card'>Manage Medicines</div>
          <div className='admin-dashboard-card'>Records</div>
          <div className='admin-dashboard-card'>Facilities</div>
          <div className='admin-dashboard-card'>Near By Hospitals</div>
          <div className='admin-dashboard-card'>Gallary</div>
        </div>
         {manageStaffModal && <Modal value={"staff"} handleClose={() => openCloseModal("staff")} header={"Manage Staffs"} children={<ManageStaff/>} />}
         {eventModal && <Modal value={"event"} handleClose={() => openCloseModal("event")} header={"Manage Events"} children={<ManageEvent/>} />}
    </div>
  )
}

export default AdminDashboard