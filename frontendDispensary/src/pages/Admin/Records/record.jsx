import React, { useEffect, useState } from 'react'
import './record.css'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBox from '../../../components/SearchBox/searchBox';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from '../../../components/Modal/modal';
import RecordModal from './RecordModal/recordModal';




function Record() {
  const [studentRoll, setStudentRoll] = useState("");
  const [listOfYear, setListOfYear] = useState([]);
  const [listOfMonth, setListOfMonths] = useState([]);
  const currentYear = new Date().getFullYear();
  const[modal,setModal] = useState(false);



  const [selectedYear, setSelectedYear] = useState("2026")
  const [selectedMonth, setSelectedMonth] = useState("")   
  const onOffModal = ()=>{
    setModal(prev=>!prev);
  }


  const onchangeField = (value)=>{
    setStudentRoll(value)
  }

   const fetchData = async () => {
   }

  useEffect(() => {
        if (selectedMonth === "" || selectedYear === "") {
            return;
        }
        fetchData();

    }, [selectedYear, selectedMonth])

    
  useEffect(()=>{
    let arr = [];
    for(let i=2026; i<=parseInt(currentYear); i++){
      arr.unshift(i.toString());
   
    }

    setListOfYear(arr);
    setSelectedYear(arr[0]);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthIndex = new Date().getMonth();
    const pastAndCurrentMonths = months.slice(0, currentMonthIndex + 1);
    setListOfMonths(pastAndCurrentMonths);
    setSelectedMonth(pastAndCurrentMonths[pastAndCurrentMonths.length - 1]);

  }, []);

    const handleOnOpenModal = ()=>{
      setModal(prev=>!prev);
    }

  return (
    <div className='record'>
      
      <div className='go-back'>
            <Link to={'.admin/register-student'}><ArrowBackIcon />
            Back To Dashboard</Link>
        </div>
        <SearchBox value={studentRoll} onChange={onchangeField} placeholder="Search by Student Roll..." />
          <div className='record-date-block'>
            select year
            <div className='record-date-year'>
              {listOfYear.length === 0 ? (
                <div className='record-year'>2026</div>
              ) : (
                listOfYear.map((item) => {
                  return (
                    <div
                      key={item}
                      className={`record-year${selectedYear === item ? ' active-stats' : ''}`}
                      onClick={() => setSelectedYear(item)}
                    >
                      {item}
                    </div>
                  )
                })
              )}
            </div>
              
              select month
              <div className='record-date-year'>
                 {listOfMonth.map((item) => {
                return (
                  <div
                    key={item}
                    className={`record-year${selectedMonth === item ? ' active-stats' : ''}`}
                    onClick={() => setSelectedMonth(item)}
                  >
                    {item}
                  </div>
                )
              })}
                
              
            </div>
          </div>

     <div className='manageMedicine-card'>
                <div className='report-form-rows'>
                    <div className='report-form-header'>
                        <div className='col-1-mng'>View</div>
                        <div className='col-2-mng'>Student name</div>
                        <div className='col-2-mng'>Roll No</div>
                        <div className='col-3-mng'>Date</div>
                    </div>
                    <div className='report-form-row-block'>
                        <div className='report-form-row'>
                            <div className='' onClick={() => handleOnOpenModal()} ><RemoveRedEyeIcon sx={{cursor:'pointer'}} /></div>
                            <div className='col-2-mng'>shashi</div>
                            <div className='col-2-mng'>3260</div>

                            <div className='col-3-mng'>12-4-26</div>
                           

                        </div>
                        <div className='report-form-row'>
                            <div className=''>No Any Records Yet</div>

                        </div>

                    </div>
                </div>
            </div>

          {modal &&  <Modal header="Records"handleClose={onOffModal} children={<RecordModal />} />}
           
    </div>

  

  )

}

export default Record
