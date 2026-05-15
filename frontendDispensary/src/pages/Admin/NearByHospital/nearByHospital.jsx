import React from 'react'

import './nearByHospital.css'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../../../components/Modal/modal'
import NearByModal from './NearByModal/nearByModal';


const NearByHospital = () => {
    const [modal, setModal] = React.useState(false);

    const onOffModal = () => {
        setModal(prev => !prev);
    }

  return (
      <div className='admin-facility'>
            <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>

            <div className='admin-facility-header'>
                <div>Near By Hospitals</div>
                <div className='add-facility-btn' onClick={onOffModal}>Add </div>
            </div>

            <div className='admin-facility-rows'>
                <div className='admin-facility-row'>
                    <div className='admin-facility-left'>
                        <div className='admin-facility-title'>Name</div>
                        <div >Address:Praygraj</div>
                        <div >Contact No.: 9856783XXX</div>
                        <div style={{marginTop:"10px"}}> Added By: Shashi </div>
                    </div>

                  
                </div>
            </div>
            
            {modal && <Modal header={"Add Near By Hospital"} value={"add-nearByHospital"} handleClose={onOffModal} children={<NearByModal />} />}
        </div>



  )
}

export default NearByHospital
