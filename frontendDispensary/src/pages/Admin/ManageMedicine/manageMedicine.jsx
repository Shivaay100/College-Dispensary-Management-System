import React, { useState } from 'react'
import './manageMedicine.css'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBox from '../../../components/SearchBox/searchBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../../../components/Modal/modal';
import MedicineModal from './MedicineModal/medicineModal';
const ManageMedicine = () => {
    const [medicineSearch, setMedicineSearch] = useState("")
    const [addModal, setAddModal] = useState(false);
    // const [clickedMedicine,setClickedMedicine] = useState(null)

    // const [data, setData] = useState([])

    const onOffmodal = () => {
        // if(addModal){
        //     setClickedMedicine(null)
        // }
        setAddModal(prev => !prev)
    }

    const onChangeValue = (value) => {
        setMedicineSearch(value)
    }
    //  const handleEdit = (item)=>{
    //     setClickedMedicine(item)
    //     setAddModal(true)
    // }

    // const filterOutMedicine = (id)=>{
    //     let newArr = data.filter((item)=>item._id!==id);
    //     setData(newArr)
    // }
    //  useEffect(() => {

    //     fetchData()
    // }, [medicineSearch])
    return (
        <div className='manageMedicine'>
            <div className='go-back'>
                <Link to={'.admin/register-student'}><ArrowBackIcon />
                    Back To Dashboard</Link>
            </div>
            <div className='top-manage-medicine'>
                <SearchBox placeholder="Search Medicines..." value={medicineSearch} onChange={onChangeValue} />
                <div className='add-manage-medicine' onClick={onOffmodal}>
                    Add
                </div>
            </div>
            <div className='manageMedicine-card'>
                <div className='report-form-rows'>
                    <div className='report-form-header'>
                        <div className=''>Sr. No.</div>
                        <div className='col-2-mng'>Medicine Name</div>
                        <div className='col-2-mng'>Added By</div>
                        <div className='col-3-mng'>Quantity</div>
                        <div className=''>Edit</div>
                        <div className=''>Delete</div>
                    </div>
                    <div className='report-form-row-block'>
                        <div className='report-form-row'>
                            <div className=''>2</div>
                            <div className='col-2-mng'>Paracetamol</div>
                            <div className='col-2-mng'>Saurav</div>

                            <div className='col-3-mng'>12</div>
                            <div className=' edit-icon '><EditIcon /></div>
                            <div className='delete-icon'><DeleteIcon /></div>

                        </div>
                        <div className='report-form-row'>
                            <div className=''>No Any Medicine Yet</div>

                        </div>

                    </div>
                </div>
            </div>
            {
                addModal && <Modal handleClose={onOffmodal} header="Add Medicine" children={<MedicineModal />} />
            }
        </div>
    )
}

export default ManageMedicine