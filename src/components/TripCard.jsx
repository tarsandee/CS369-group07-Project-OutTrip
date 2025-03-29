import React from 'react'
import '../styles/TripCard.css';
import ProfileCard from './ProfileCard';

function TripCard({trip}) {
  return (
    <div className='trip-card'>
        <div className='top'>
            <div className='profile'>
                <ProfileCard/>
            </div>
            <div className='rating'>
                <div className='stars'>⭐ {trip.rating}</div>
            </div>
        </div>
        <div className='details'>{trip.details}</div>
        <div className='bottom'>
            <div className='location'>{trip.location}</div>
            <div className='date'>{trip.date}</div>
            <div className='btn-conatiner'>
                <div className='review-btn'>Review</div>
                <div className='add-btn'>Adding Trip</div>
            </div>
        </div>
    </div>
  )
}

export default TripCard