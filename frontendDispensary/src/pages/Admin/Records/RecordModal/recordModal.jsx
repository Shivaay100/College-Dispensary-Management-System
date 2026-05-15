import React from 'react'
import './recordModal.css'
const RecordModal = (props) => {
    console.log(props)
    return (
        <div className='record-modal'>
            <div className='student-modal-report'>
                <div>Shashi</div>
                <div>Shashi@example.com</div>
                <div>3260</div>
                </div>


          

            <div className='student-details-scroll'>
                <div className='student-modal-detail'>
                    <div className='student-modal-header'>
                        {props.selectedHistory?.createdAt.slice(0, 10).split("-").reverse().join("-")}
                    </div>

                    <div className='student-modal-body-student'>
                        <div className='student-modal-body-header'>
                            <div>Medicine Name</div>
                            <div>Quantity</div>
                        </div>

                        <div className='student-modal-body-item'>

                           <div className='student-item-modal'>
                                <div>Paracetamol</div>
                                <div>2</div>
                            </div>  
                           </div>

                        </div>
                    </div>

               

                </div>



            </div>

        
    )
}

export default RecordModal