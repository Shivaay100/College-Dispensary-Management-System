import React from 'react'
import './facilityModal.css'

const FacilityModal = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='facility-modal'>
       <form className='register-form' onSubmit={handleSubmit}>
                <div className=''>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Enter Title' />
                    </div>
                    <div className='register-input-box' style={{marginTop:20}}> 
                        <textarea cols={450}  rows={5} className='input-box-register' placeholder='Enter Description' />
                    </div>
                  

                </div>
                <button type='submit' className='form-btn reg-btn' >Add</button>
                
            </form>
      
    </div>
  )
}

export default FacilityModal
