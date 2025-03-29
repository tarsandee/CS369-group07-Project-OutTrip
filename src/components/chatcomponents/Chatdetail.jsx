import React from "react";
import '../../styles/chatstyles/Chatdetail.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Chatdetail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <AccountCircleIcon fontSize='large' />
                <div className="texts">
                    <span>USERNAME</span>
                    <p>First name Last name</p>
                </div>
            </div>
            <div className="star">
                <StarOutlineIcon fontSize='large' />
                <StarOutlineIcon fontSize='large' />
                <StarOutlineIcon fontSize='large' />
                <StarOutlineIcon fontSize='large' />
                <StarOutlineIcon fontSize='large' />
            </div>

            <div className="Menu-detail">
                <div className="Profile">
                    <AccountBoxIcon fontSize='large' />
                    <div className="texts">
                        <span>Profile</span>
                    </div>
                </div>
                <div className="Posttrip">
                    <AccountBoxIcon fontSize='large' />
                    <div className="texts">
                        <span>Post Trip</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chatdetail