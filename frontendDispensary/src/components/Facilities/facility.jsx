import React from 'react'
import './facility.css'

const Facility = () => {
  const facilities = [
    {
      title: "Ambulance",
      desc: "24/7 ambulance service available for emergency transport inside and outside campus."
    },
    {
      title: "OPD Services",
      desc: "Daily outpatient consultation with qualified doctors for students and staff."
    },
    {
      title: "Pharmacy",
      desc: "In-house pharmacy providing essential medicines at subsidized rates."
    },
    {
      title: "Emergency Care",
      desc: "Immediate medical assistance available for accidents and critical conditions."
    },
    {
      title: "Laboratory",
      desc: "Basic diagnostic tests like blood test, urine test, etc. available."
    },
    {
      title: "Specialist Visits",
      desc: "Regular visits by specialist doctors (Dentist, Eye specialist, etc.)."
    }
  ];

  return (
    <div className='facility'>
      <div className='facility-header'>
        List of facilities available at NIT Health Centre:
      </div>

      <div className='facility-lists'>
        {facilities.map((item, index) => (
          <div className='facility-card' key={index}>
            <div className='facility-list-header'>{item.title}</div>
            <p className='facility-list-value'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Facility