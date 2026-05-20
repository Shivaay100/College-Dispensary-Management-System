import React ,{useState}from 'react'
import './medicineModal.css'
import { name } from 'ejs';
const MedicineModal = () => {

    const [medicineName, setMedicineName] = useState({name:"",quantity:"",usage:""});

    const handleOnChangeInputField = (e, field) => {
        setMedicineName({...medicineName, [field]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='register-form-div'>
                <div className='register-input-box'>
                    <input 
                        value={medicineName.name} 
                        className='input-box-register' 
                        type="text" 
                        placeholder='Medicine Name' 
                        onChange={(e) =>handleOnChangeInputField(e, "name")} 
                    />
                </div>
                <div className='register-input-box'>
                    <input 
                        value={medicineName.quantity} 
                        className='input-box-register' 
                        type="text" 
                        placeholder='Quantity' 
                        onChange={(e) =>handleOnChangeInputField(e, "quantity")} 
                    />
                </div>
                <div className='register-input-box'>
                    <input 
                        value={medicineName.usage} 
                        className='input-box-register' 
                        type="text" 
                        placeholder='Usage' 
                        onChange={(e) =>handleOnChangeInputField(e, "usage")} 
                    />
                </div>
            </div>
            <button type='submit' className='form-btn reg-btn' >Add</button>
        </form>
    )
}

export default MedicineModal