import React from 'react'
import './aboutus.css'
const AboutUs = () => {
  return (
    <div className='about-us'>
      <p>The medical needs of the Campus population consisting of Students, Staff members and their families are met by the Institute Health Center. The Health Center has medical officer, nursing staff members and office attendant. The Institute Health center has facilities for OPD treatment. Health Center has Doctor’s room, Pharmacy, nursing station, observation room containing semi-fowler beds for patient care and visiting specialist’s room where services of Gynaecologist and Physiotherapist may be availed. There is a facility of ambulance 24X7 available for students, faculty and staff. The Ambulance is fully equipped with an oxygen cylinder, first aid kit bag, emergency medicines and other necessary equipment.</p>

      <a className='about-link' href='https://drive.google.com/file/d/1E2Lmb-FZ_eL1UGgkvPENMXJTrxL3vlL0/view' target='_blank'>SoPs for NIT Allahabad health center services</a>

      <p className ='about-staffHeader'>Staff with their visiting days as follow:</p>
        
        <ul>

            <li>Health Center Timings: Monday to Saturday 8 Am to 9 PM</li>
            <li>Doctor Consulation Timings : Monday to Friday 10 AM to 5AM and Saturday 10AM to 1:30 PM.</li>
        </ul>



    </div>
  )
}

export default AboutUs