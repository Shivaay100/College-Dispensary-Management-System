import React from 'react'
import '../AddModal/addModel.css'
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteModal(props) {
  return (
    <div className='addModal'>
            <div className='addModal-card'>
                 <div>Delete Image</div>
                    <div>Are you sure you want to delete this image?</div>
                 <div className='modal-add-btns'>
                 <div className='cancel-modal-btn' onClick={props.onClose}>Cancel</div>
                    <div className='add-modal-btn' onClick={props.onDelete}><DeleteIcon /> Delete</div>
                    </div>
                 </div>
            </div>
  )
}

export default DeleteModal
