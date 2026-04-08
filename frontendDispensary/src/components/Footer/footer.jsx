import React from 'react'
import './footer.css'
import logo from '../../assets/MNNIT_LOGO_img.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import CloudIcon from '@mui/icons-material/Cloud';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {

  const todayDate = new Date();

  return (
    <div className='footer'>

      {/* LEFT */}
      <div className='footer-left'>
        <img className='footer-logo' src={logo} alt='College Logo' />
        <div className='footer-title'>MNNIT Allahabad</div>
        <div className='footer-sub'>Motilal Nehru National Institute of Technology</div>

        <div className='footer-info'>
          <LocationOnIcon /> Prayagraj, UP - 211004
        </div>
        <div className='footer-info'>
          <PhoneIcon /> 0532-2545404
        </div>
        <div className='footer-info'>
          <LanguageIcon /> www.mnnit.ac.in
        </div>
      </div>

      {/* CENTER */}
      <div className='footer-center'>
        <div className='footer-heading'>Important Links</div>

        <a href='#'>Anti-Ragging Initiative</a>
        <a href='#'>Placement Cell</a>
        <a href='#'>RTI</a>
        <a href='#'>Grievance Cell</a>
        <a href='#'>Contact Us</a>
        <a href='#'>Official Website</a>
      </div>

      {/* RIGHT */}
      <div className='footer-right'>
        <div className='footer-right-name'>
          <CloudIcon /> Health Centre Portal
        </div>

        <div className='footer-date'>
          {todayDate.toDateString()}
        </div>

        <div className='footer-copy'>
          © 2026 MNNIT. All rights reserved.
        </div>
      </div>

    </div>
  )
}

export default Footer