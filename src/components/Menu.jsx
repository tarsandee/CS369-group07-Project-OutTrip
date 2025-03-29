import React from "react";
import '../styles/Menu.css';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LogoutIcon from '@mui/icons-material/Logout';
import TourIcon from '@mui/icons-material/Tour';
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";

function Menu() {
    const navigate = useNavigate
    return (
        <div className="menu">
            <div className="logo-container">
                <div className="logo"><FlightTakeoffIcon fontSize="large"/></div>
                <div className="title">OutTrip</div>
            </div>
            <div className="option">
                <div className="option-btn" onClick={() => navigate('/')}>
                    <HomeFilledIcon fontSize="large" />
                    <p>HOME</p>
                </div>
                <div className="option-btn">
                    <TourIcon fontSize="large"/>
                    <p>MY TRIP</p>
                </div>
            </div>
            <div className="profile-container">
                <ProfileCard/>
                <LogoutIcon fontSize="large" sx={{marginLeft: 'auto', marginTop:'10px'}}/>
            </div>
        </div>
    );
}

export default Menu;