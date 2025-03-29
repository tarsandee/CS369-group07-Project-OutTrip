import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/Chat.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SmallTripCard from './SmallTripCard';

function Chat() {
  return (
    <div className='chat'>
        <div className='flex px-4 py-6'>
            <AccountCircleIcon fontSize='large'/>
            <NotificationsNoneOutlinedIcon fontSize='large' sx={{marginLeft:'auto'}}/>
        </div>
        <div className='body'>
            <p>Chat</p>
            <div className='flex gap-2 pt-2'>
                <AccountCircleIcon fontSize='large'/>
                <p className='pt-1 text-lg'>Hi there.</p>
            </div>
            <div className='flex gap-2 pt-2'>
                <AccountCircleIcon fontSize='large'/>
                <p className='pt-1 text-lg'>Hi there.</p>
            </div>
        </div>
        <div className='upcoming-trips'>
            <p className='pb-2'>Upcoming Trips</p>
            <SmallTripCard/>
            <SmallTripCard/>
        </div>
    </div>
  )
}

export default Chat