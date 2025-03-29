import React from 'react'
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';

function SmallTripCard() {
  return (
    <div className='flex gap-2 w-full'>
      <AirplaneTicketOutlinedIcon fontSize='large'/>
      <div className='flex gap-1 text-xl pt-1 w-full'>
        <p>Location</p>
        <p className='ml-auto'>Date</p>
      </div>
    </div>
  )
}

export default SmallTripCard