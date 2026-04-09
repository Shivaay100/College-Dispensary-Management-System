import React from 'react'
import './gallary.css'

const Gallary = () => {

  const images = [
    
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
  ];

  return (
    <div className='gallary-home'>
      {images.map((item, index) => (
        <div className='gallary-home-image-block' key={index}>
          <img src={item.src} alt={item.title} className='gallary-home-image' />
          <div className='image-overlay'>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallary