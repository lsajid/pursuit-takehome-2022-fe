import React from 'react';
import {Link} from "react-router-dom";
import restaurantStockImg from "../assets/restaurant.png";
import "../Styles/Restaurant.css";
import { Typography } from '@mui/material';

function Restaurant( {singleRestaurant} ) {
  const id = singleRestaurant.id;

  return (
    <div className='restaurant-container'>
      <Link to={`/restaurant/${id}`}>
        <div className='restaurant-data'>
            
          <img className="restaurant-image"  src={restaurantStockImg} alt='restaurant stock'/>
            
          <div className='restaurant-name'>
              <Typography variant="h5" component="h2">{singleRestaurant.name}</Typography>
          </div>
             
              <div className='restaurant-type'>
                  <div>
                    {singleRestaurant.cuisine}
                  </div>
              </div>
              <div className='restaurant-location'>
                  <div>
                    {singleRestaurant.location}
                  </div>
              </div>
            <div className='restaurant-price'>
                  <div>
                      {singleRestaurant.price}
                  </div>
            </div>
          </div>
      </Link> 
    </div>
  )
}

export default Restaurant