import React, { useState } from 'react'
import './addModel.css'

const AddModel = (props) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        if (file) {
            const newImage = {
                src: URL.createObjectURL(file),
                title: file.name
            };
            props.onAdd(newImage);
        }
    };

    return (
        <div className='addModal'>

            <div className='addModal-card'>
                 <div>Add Image</div>
                 {file && <div className='selected-file-name'>{file.name}</div>}
                 <div className='modal-add-btns'>
                 <div className='cancel-modal-btn' onClick={props.onClose}>Cancel</div>
                 {!file && <label htmlFor='fileInput' className='cancel-modal-btn'>Upload Image</label>}
                    <input id="fileInput" type="file" onChange={handleFileChange} className='cancel-file'/>
                 {file && <div className='add-modal-btn' onClick={handleSubmit}>Add</div>}
                    </div>



                 </div>


            </div>
    )
}

export default AddModel
