import React,{useState} from 'react'
import './nearByModal.css'

function NearByModal() {
    const [inputFields, setInputFields] = useState({
        name: "",
        address: "",
        contactNo: ""
    });

    const handleOnChange = (e, field) => {
        setInputFields({...inputFields, [field]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
                <form className='register-form' onSubmit={handleSubmit}>
                <div className='register-form-div'>
                    <div className='register-input-box'> 
                        <input 
                            value={inputFields.name} 
                            className='input-box-register' 
                            type="text" 
                            placeholder='Name' 
                            onChange={(e) => handleOnChange(e, "name")} 
                        />
                    </div>
                    <div className='register-input-box'> 
                        <input 
                            value={inputFields.address} 
                            className='input-box-register' 
                            type="text" 
                            placeholder='Address' 
                            onChange={(e) => handleOnChange(e, "address")} 
                        />
                    </div>
                    <div className='register-input-box'> 
                        <input 
                            value={inputFields.contactNo} 
                            className='input-box-register' 
                            type="text" 
                            placeholder='Contact No.' 
                            onChange={(e) => handleOnChange(e, "contactNo")} 
                        />
                    </div>
                    </div>
                <button type='submit' className='form-btn reg-btn' >Add</button>
                
            </form>
  )
}

export default NearByModal
