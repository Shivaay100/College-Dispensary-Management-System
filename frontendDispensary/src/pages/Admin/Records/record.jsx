import React, { useEffect, useState } from 'react'
import './record.css'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBox from '../../../components/SearchBox/searchBox';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from '../../../components/Modal/modal';
import RecordModal from './RecordModal/recordModal';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import StudentAllFiles from './StudentAllDetails/studentAllFiles';




function Record(props) {
  const [studentRoll, setStudentRoll] = useState("");
  const [listOfYear, setListOfYear] = useState([]);
  const [listOfMonth, setListOfMonths] = useState([]);
  const currentYear = new Date().getFullYear();
  const[modal,setModal] = useState(false);
  const[allRecordModal,setAllRecordModal] = useState(false);
  const[data,setData] = useState([]);
  const[selectedHistory,setSelectedHistory] = useState(null);
  const[selectedAllDetails,setSelectedAllDetails] = useState(null);
   







  const [selectedYear, setSelectedYear] = useState("2026")
  const [selectedMonth, setSelectedMonth] = useState("")   
  const onOffModal = ()=>{
    setModal(prev=>!prev);
  }

  const onOffAllRecordModal = ()=>{
    if(allRecordModal){
      setSelectedAllDetails(null);
    }
    setAllRecordModal(prev=>!prev);
  }


  const onchangeField = (value)=>{
    setStudentRoll(value)
  }

   const fetchData = async () => {
    props.showLoader();

    await axios.get(`http://localhost:4000/api/history/get-history?month=${selectedMonth}&year=${selectedYear}`, { withCredentials: true }).then((response) => {
      // Handle the response
      console.log(response);
      setData(response?.data?.history);
    }).catch((err) => {
      toast.error(response?.data?.error);
    }).finally(() => {
      props.hideLoader();
    });
  };

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

    const handleOnOpenModal = (item)=>{
      
      setModal(prev=>!prev);
      setSelectedHistory(item?item:null);
    }

    const handleClick = async() => {
      if (studentRoll === "") {
        toast.error("Please enter a student roll number.");
        return;
      }
      props.showLoader();
      await axios.get(`http://localhost:4000/api/history/get?roll=${studentRoll}`, { withCredentials: true }).then((response) => {
        // Handle the response
        console.log(response);
        setSelectedAllDetails(response?.data?.history);
       
        
      }).catch((err) => {
        toast.error(err?.response?.data?.error);
      }).finally(() => {
        props.hideLoader();
      }); 
    }

  return (
    <div className='record'>
      
      <div className='go-back'>
            <Link to={'.admin/register-student'}><ArrowBackIcon />
            Back To Dashboard</Link>
        </div>
        <SearchBox handleClick={handleClick} value={studentRoll} onChange={onchangeField} placeholder="Search by Student Roll..." />
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
                    <div className='report-form-row-block'>{  
                      data.map((item, index) => {
                        return (
                            <div className='report-form-row' key={index}>
                                <div className='col-1-mng' onClick={() => handleOnOpenModal(item)}><RemoveRedEyeIcon /></div>
                                <div className='col-2-mng'>{item?.student?.name}</div>
                                <div className='col-2-mng'>{item?.student?.roll}</div>
                                <div className='col-3-mng'>{item.createdAt.slice(0, 10).split('-').reverse().join('-')}</div>
                            </div>
                        )
                    })
                      
                      
                    }
                       
                        {
                          data.length===0 && <div className='report-form-row'>
                            <div className=''>No Records Found</div>
                          </div>


                        }
                    </div>
                </div>
            </div>

            <ToastContainer />

          {modal &&  <Modal header="Records"handleClose={onOffModal} children={<RecordModal selectedHistory={selectedHistory} />} />}
            {allRecordModal &&  <Modal header="All Records"handleClose={onOffAllRecordModal} children={<StudentAllFiles studentAllDetails={selectedAllDetails} />} />}
           
    </div>

  

  )

}

export default Record
