import React from 'react';
import RestaurantDetails from '../Components/RestaurantDetails';
import "../Styles/SingleRestaurant.css";

function SingleRestaurant() {
  return (
    <div className='singleRestaurant-container'> 
      <RestaurantDetails/> 
    </div>
  )
}

export default SingleRestaurant