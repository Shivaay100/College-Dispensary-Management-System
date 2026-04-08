import React from 'react'
import './gallary.css'

const Gallary = () => {

  const images = [
    
    { 
      src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop", 
      title: "Hospital" 
    },
    { 
      src: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop", 
      title: "Doctors" 
    },
    
    { 
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop", 
      title: "Laboratory" 
    },
    { 
      src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop", 
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