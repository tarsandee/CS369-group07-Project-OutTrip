import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/ProfileCard.css';


function ProfileCard() {
  return (
    <div className='profile-card'>
        <div className="profile-picture"><AccountCircleIcon fontSize="large"/></div>
        <div className="name-container">
            <div className="username">USERNAME</div>
            <div className="name">First name Last name</div>
        </div>
    </div>
  )
}

export default ProfileCard