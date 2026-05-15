import React, { useState, useEffect } from 'react'
import './facility.css'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '../../../components/Modal/modal';
import FacilityModal from './FacilityModal/facilityModal';


const Facility = () => {
    const [modal, setShowModal] = useState(false)

    const onOFModal = () => setShowModal(prev => !prev)

    return (
        <div className='admin-facility'>
            <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>

            <div className='admin-facility-header'>
                <div>Facilities</div>
                <div className='add-facility-btn' onClick={onOFModal}>Add </div>
            </div>

            <div className='admin-facility-rows'>
                <div className='admin-facility-row'>
                    <div className='admin-facility-left'>
                        <div className='admin-facility-title'>Title</div>
                        <div className='admin-facility-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</div>
                        <div style={{marginTop:"10px"}}> Added By: Shashi </div>
                    </div>

                    <div className='admin-facility-right'>
                        <div className='admin-facility-btns'>
                            <EditIcon />
                            <DeleteIcon />
                        </div>
                    </div>
                </div>
            </div>
            {modal && <Modal header={"Add Facility"} value={"add-facility"} handleClose={onOFModal} children={<FacilityModal />} />}
            
        </div>



           
    )
}


export default Facility