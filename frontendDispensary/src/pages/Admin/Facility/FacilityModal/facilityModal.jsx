import React,{useState} from 'react'
import './facilityModal.css'

const FacilityModal = () => {
    const [inputFields, setInputFields] = useState({
        title:"",
        description:""
    });
    const handleOnChangeInputField = (e, field) => {
        setInputFields({...inputFields, [field]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='facility-modal'>
       <form className='register-form' onSubmit={handleSubmit}>
                <div className=''>
                    <div className='register-input-box'> 
                        <input 
                            value={inputFields.title} 
                            className='input-box-register' 
                            type="text" 
                            placeholder='Enter Title' 
                            onChange={(e) => handleOnChangeInputField(e, "title")} 
                        />
                    </div>
                    <div className='register-input-box' style={{marginTop:20}}> 
                        <textarea 
                            value={inputFields.description} 
                            cols={450} 
                            rows={5} 
                            className='input-box-register' 
                            placeholder='Enter Description' 
                            onChange={(e) => handleOnChangeInputField(e, "description")} 
                        />  
                    </div>
                  

                </div>
                <button type='submit' className='form-btn reg-btn' >Add</button>
                
            </form>
      
    </div>
  )
}

export default FacilityModal
