import React from 'react';
import RestaurantDetails from '../Components/RestaurantDetails';
import "../Styles/SingleRestaurant.css";

function SingleRestaurant({reservations}) {
  return (
    <div className='singleRestaurant-container'> 
      <RestaurantDetails reservations={reservations}/> 
    </div>
  )
}

export default SingleRestaurant