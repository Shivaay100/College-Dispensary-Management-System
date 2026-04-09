import React from 'react'
import './adminDashboard.css'
const AdminDashboard = () => {
  return (
    <div className='adminDashboard'>
        <div className='welcome-header'>
          <div className='welcome-admin'>Welcome To Admin Panel</div>
          <div className='welcome-admin-right-side'>
            <div className='manage-staff-btn'>Manage Staffs</div>
            <div className='manage-staff-btn'>Events</div>
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
    </div>
  )
}

export default AdminDashboard