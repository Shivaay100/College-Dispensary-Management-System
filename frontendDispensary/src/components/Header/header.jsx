import React,{useState,useEffect} from 'react'
import './header.css'
import logo from '../../assets/MNNIT_LOGO_img.jpg'
import banner from '../../assets/Cover-image1.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const[eventpopup,setEventpopup] = useState(false);
  const[helpline,setHelpline] = useState(false);

  const handleOpenPopup = (popup) => {
    if (popup === "event") {
        setEventpopup(true);
    } else {
        setHelpline(true)
    }
}


const handleClosePopup = (popup) => {
  if (popup === "event") {
      setEventpopup(false);
  } else {
      setHelpline(false)
  }
}






  return (
    <div className='header'>

      {/* ✅ Row 1 - College Details */}
      <div className='header-college-details'>

        {/* Left - Logo + Name */}
        <div className='header-college-details-left-logo'>
          <img src={logo} alt='College Logo'/>
          <div>
            <div className='header-college-details-name'>मोतीलाल नेहरू नेशनल इंस्टीट्यूट ऑफ़ टेक्नोलॉजी,</div>
            <div className='header-college-details-place-red'>इलाहाबाद</div>
            <div className='header-college-details-name'>Motilal Nehru National Institute of Technology</div>
            <div className='header-college-details-place-red'>Allahabad</div>
          </div>
        </div>

        {/* Right - Social Media + Input */}
        <div className='header-college-details-right'>
          <div className='header-college-social-media'>
            <a target='_blank' href='https://www.youtube.com/@mnnit_allahabad'>
              <img src='https://cdn-icons-png.flaticon.com/128/3670/3670147.png' className='header-social-media-image' />
            </a>
            <a target='_blank' href='https://www.facebook.com/mnnitallahabad'>
              <img src='https://cdn-icons-png.flaticon.com/128/733/733547.png' className='header-social-media-image' />
            </a>
            <a target='_blank' href='https://x.com/MNNIT_Allahabad'>
              <img src='https://cdn-icons-png.flaticon.com/128/5968/5968830.png' className='header-social-media-image' />
            </a>
            <a target='_blank' href='https://www.instagram.com/mnnit_allahabad'>
              <img src='https://th.bing.com/th/id/OIP.0wjhvLpjGf_-r-1lqG3QAQHaHw?rs=1&pid=ImgDetMain' className='header-social-media-image' />
            </a>
          </div>
          <input type='text' className='header-input-tags' placeholder='Search...' />
        </div>

      </div> {/* ✅ header-college-details ends HERE */}

      {/* ✅ Row 2 - Navbar OUTSIDE header-college-details */}
      <div className='navbar'>
        <div className='navbar-links'>Home</div>
        <div className='navbar-links'>Login</div>
        <div className='navbar-links'>Stock View</div>
        <div className='navbar-links event-link' onMouseEnter={() => handleOpenPopup("event")} onMouseLeave={() => handleClosePopup("event")}>
          <div className = 'navbar-link-opt'> New Events <ArrowDropDownIcon/></div>
         
          {
            eventpopup &&  <div className ='navbar-dropdown-popup event-pop'>
            <div className='popup-notification'>. Christmas Celebration</div>
            <div className ='popup-notification'>. Diwali Celebration</div>
  
  
           </div>
          }

        </div>
        <div className='navbar-links event-link' onMouseEnter={() => handleOpenPopup("helpline")} onMouseLeave={() => handleClosePopup("helpline")}>
          <div className='navbar-link-opt'>HelpLine <ArrowDropDownIcon/></div>
          
          {
            helpline && <div className='navbar-dropdown-popup helpline-pop'>
            <div className='popup-notification'>Disaster management: 1007</div>

          </div>
          }
          
          </div>
      </div>

      <div className='header-banner'>
    <img src={banner} alt='MNNIT Banner' className='header-banner-image'/>
</div>


    </div>
  )
}

export default Header