import React from 'react'
import './nearByModal.css'

function NearByModal() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
                <form className='register-form' onSubmit={handleSubmit}>
                <div className='register-form-div'>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Name' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Address' />
                    </div>
                    <div className='register-input-box'> 
                        <input className='input-box-register' type="text" placeholder='Contact No.' />
                    </div>
                    </div>
                <button type='submit' className='form-btn reg-btn' >Add</button>
                
            </form>
  )
}

export default NearByModal
