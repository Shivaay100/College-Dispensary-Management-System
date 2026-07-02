import React, { useState } from 'react';
import './addModel.css';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AddModal = (props) => {

    const [image, setImage] = useState(null);
    const [loader, setLoader] = useState(false);

    const uploadImage = async (e) => {

        const files = e.target.files;
        const data = new FormData();

        data.append("file", files[0]);
        data.append("upload_preset", "college_dispensary");

        setLoader(true);

        try {

            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dfx8i2ek2/image/upload",
                data
            );

            const imageUrl = response.data.secure_url;
            setImage(imageUrl);

        } catch (err) {

            console.log(err);

        } finally {

            setLoader(false);

        }
    };

    const handleSubmit = async() => {
        await axios.post('http://localhost:4000/api/gallery/addGallery', { link: image }, { withCredentials: true }).then((resp) => {
            window.location.reload();
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="addModal">

            <div className="addModal-card">

                <div>Add Image</div>

                <div className="modal-add-btns">

                    <div
                        className="cancel-modal-btn"
                        onClick={() => props.onClose()}
                    >
                        Cancel
                    </div>

                    <label
                        htmlFor="fileInput"
                        className="cancel-modal-btn"
                    >
                        Upload
                    </label>

                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        className="cancel-file"
                        onChange={uploadImage}
                    />

                </div>

                {
                    loader &&
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                }

                {
                    image &&
                    <img
                        src={image}
                        style={{
                            width: "200px",
                            height: "200px",
                            marginTop: 20
                        }}
                        alt=""
                    />
                }

                {
                    image &&
                    <div
                        className="cancel-modal-btn"
                        onClick={submitImage}
                    >
                        Submit
                    </div>
                }

            </div>

        </div>
    );
};

export default AddModal;