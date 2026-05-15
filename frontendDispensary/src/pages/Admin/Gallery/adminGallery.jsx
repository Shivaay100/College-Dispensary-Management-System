import React, { useState } from 'react'
import './adminGallery.css'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddModel from './AddModal/addModel';
import DeleteModal from './DeleteModal/deleteModal';

function AdminGallery() {

  const [addModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const setAddModalFunc = () => setShowModal(prev => !prev);
  const openDeleteModal = (index) => { setSelectedIndex(index); setDeleteModal(true); };
  const closeDeleteModal = () => { setSelectedIndex(null); setDeleteModal(false); };
  const [images, setImages] = useState([
    {
      src: "https://www.mnnit.ac.in/newhc/images/demo/h.jpg",
      title: "Hospital"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdW_5hDVAmKiZ77___NlgbFLTl4xaTOKukg&s",
      title: "Reception"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUYn8UCDQntrEUQGIWvuamONpBcTU3eCkYQ&s",
      title: "Doctors"
    },
    {
      src: "https://www.mnit.ac.in/facilities/images/dispensary/dispensary3.jpg",
      title: "Rooms"
    },
    {
      src: "https://content.jdmagicbox.com/comp/allahabad/z4/0532px532.x532.220716202432.q4z4/catalogue/mnnit-dispensary-allahabad-city-allahabad-clinics-xAE62Iq6Xx-250.jpg",
      title: "Interior"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ij5B7pNZB_x7Qp2UmcFCWO7bmhgM5ClgBQ&s",
      title: "Patient Care"
    }
  ]);

  const handleAddImage = (newImage) => {
    setImages(prev => [...prev, newImage]);
    setShowModal(false);
  };

  const handleDeleteImage = () => {
    setImages(prev => prev.filter((_, i) => i !== selectedIndex));
    closeDeleteModal();
  };

  return (
    <div className='gallery-admin'>
        <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>
      <div className='add-pic-gallary-btn' onClick={() => setAddModalFunc()}>Add Picture</div>
      {addModal && <AddModel onClose={() => setAddModalFunc()} onAdd={handleAddImage} />}

        {deleteModal && <DeleteModal onClose={closeDeleteModal} onDelete={handleDeleteImage}/>}

        <div className='gallery-pics'>
          {images.map((item, index) => (
            <div className='gallery-pic-block' key={index}>
              <img src={item.src} alt={item.title} className='img-admin' />
              <div className='image-title-overlay'>{item.title}</div>
              <div className='delete-icon-btn' onClick={() => openDeleteModal(index)}>&#10005;</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default AdminGallery
