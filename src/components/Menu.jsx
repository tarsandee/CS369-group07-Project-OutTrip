import React from "react";
import '../styles/Menu.css';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LogoutIcon from '@mui/icons-material/Logout';
import TourIcon from '@mui/icons-material/Tour';
import ProfileCard from "./ProfileCard";

function Menu() {
    return (
        <div className="menu">
            <div className="logo-container">
                <div className="logo"><FlightTakeoffIcon fontSize="large"/></div>
                <div className="title">OutTrip</div>
            </div>
            <div className="option">
                <div className="flex gap-2 pl-[20px]">
                    <HomeFilledIcon fontSize="large" />
                    <p>HOME</p>
                </div>
                <div className="flex gap-2 pl-[20px]">
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