import React, { useState } from 'react'
import './home.css'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ImageIcon from '@mui/icons-material/Image';
import AboutUs from '../../components/AboutUs/aboutUs';
import Staff from '../../components/Staffs/staff';
import Facility from '../../components/Facilities/facility';
import NearByHospitals from '../../components/NearByHospitals/nearByHospitals';
import Gallary from '../../components/Gallary/gallary';

const Home = (props) => {
    const [page, setPage] = useState("About")
    let [rightSideHeader, setRightSideHeader] = useState("About Us");

    const handleChangeTab = (pagename) => {
        setPage(pagename);
        switch (pagename) {
            case "About":
                setRightSideHeader("About Us");
                break;
            case "Staff":
                setRightSideHeader("Our Staffs");
                break;
            case "Facility":
                setRightSideHeader("Facilities");
                break;
            case "NearByHospitals":
                setRightSideHeader("Near By Hospitals");
                break;
            case "Gallary":
                setRightSideHeader("Gallery");
                break;
        }
    }

    const getComponent = () => {
        switch (page) {
            case "About":
                return <AboutUs />;
            case "Staff":
                return <Staff />;
            case "Facility":
                return <Facility />;
            case "NearByHospitals":
                return <NearByHospitals />;
            case "Gallary":
                return <Gallary />;
            default:
                return null;
        }
    }

    return (
        <div className='home'>
            <div className='home-block'>
                <div className='home-left-page'>

                    <div className={`home-left-option ${page === "About" ? "active-opt" : ""}`} onClick={() => handleChangeTab("About")}>
                        <HomeIcon /> About Us
                    </div>

                    <div className={`home-left-option ${page === "Staff" ? "active-opt" : ""}`} onClick={() => handleChangeTab("Staff")}>
                        <PeopleAltIcon /> Staffs
                    </div>

                    <div className={`home-left-option ${page === "Facility" ? "active-opt" : ""}`} onClick={() => handleChangeTab("Facility")}>
                        <Diversity3Icon /> Facilities
                    </div>

                    <div className={`home-left-option ${page === "NearByHospitals" ? "active-opt" : ""}`} onClick={() => handleChangeTab("NearByHospitals")}>
                        <LocalHospitalIcon /> Near By Hospitals
                    </div>

                    <div className={`home-left-option ${page === "Gallary" ? "active-opt" : ""}`} onClick={() => handleChangeTab("Gallary")}>
                        <ImageIcon /> Gallery
                    </div>

                </div>

                <div className='home-right-page'>
                    <div className='home-right-header'>
                        {rightSideHeader}
                    </div>
                    <div className='home-right-section'>
                        {getComponent()}
                    </div>
                </div>

            </div>  
        </div>  
    )
}

export default Home