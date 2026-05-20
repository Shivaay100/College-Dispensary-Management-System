import React, { useState } from 'react'
import './addModel.css'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const AddModel = (props) => {
    const [image, setImage] = useState(null);
    const [loader, setLoader] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const uploadImage = async(e) => {
        const file = e.target.files;
        const data = new FormData();
        data.append("file", file[0]);
        data.append("upload_preset", "college_dispensary"); 
        setLoader(true);
        try { 
            const response = await axios.post("https://api.cloudinary.com/v1_1/dfx8i2ek2/image/upload", data);
            const imageUrl = response.data.secure_url;
            setImage(imageUrl);
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
            setLoader(false); 
        }
    }
    
    const handleSubmit = async () => {
        if (image && !submitted) {
            setSubmitted(true);
            const newImage = {
                src: image,
                title: "Gallery Image"
            };
            props.onAdd(newImage);
            setTimeout(() => props.onClose(), 500);
        } else if (!image) {
            alert("Please upload an image first");
        }
    };

    return (
        <div className='addModal'>
            <div className='addModal-card'>
                 <div>Add Image</div>
                 
                 {!image ? (
                    <>
                        <div className='modal-add-btns'>
                            <div className='cancel-modal-btn' onClick={props.onClose}>Cancel</div>
                            <label htmlFor='fileInput' className='cancel-modal-btn'>Upload</label>
                            <input id="fileInput" accept="image/*" onChange={(e) => uploadImage(e)} className='cancel-file' type='file' />
                        </div>
                        {loader && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                                <CircularProgress />
                            </Box>
                        )}
                    </>
                 ) : (
                    <>
                        <div className='selected-file-name'>✓ Image uploaded successfully</div>
                        <img src={image} alt="Selected" className='selected-image' />
                        <div className='modal-add-btns'>
                            <button onClick={props.onClose} className='cancel-modal-btn' disabled={submitted}>Cancel</button>
                            <button onClick={handleSubmit} className='form-btn reg-btn' disabled={submitted}>
                                {submitted ? 'Adding...' : 'Add'}
                            </button>
                        </div>
                    </>
                 )}
            </div>
        </div>
    )
}



export default AddModel

// present-name=college_dispensary
// cloudname = dfx8i2ek2