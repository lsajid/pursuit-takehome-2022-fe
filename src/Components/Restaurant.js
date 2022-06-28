import React from 'react';
import {Link} from "react-router-dom";
import restaurantStockImg from "../assets/restaurant.png";
import "../Styles/Restaurant.css";
import { Typography } from '@mui/material';
//import location, cuisine, money, clock
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';

function Restaurant( {singleRestaurant} ) {
  const id = singleRestaurant.id;

  return (
    <div className='restaurant-container'>
      <Link to={`/restaurant/${id}`}>
        <div className='restaurant-data'>
            
          <img className="restaurant-image"  src={restaurantStockImg} alt='restaurant stock'/>
            
          <div className='restaurant-name'>
              <Typography variant="h5" component="h2">
                {singleRestaurant.name}
              </Typography>
          </div>
             
              <div className='restaurant-type'>
                  <Typography>
                    <RestaurantOutlinedIcon/>
                    {singleRestaurant.cuisine}
                  </Typography>

                  <Typography>
                    <AccessTimeOutlinedIcon/>
                    {singleRestaurant.openingTime} - {singleRestaurant.closingTime}
                  </Typography>
              </div>
              <div className='restaurant-location'>
                  <Typography>
                  <LocationOnIcon/>
                    {singleRestaurant.location}
                  </Typography>
              </div>
            <div className='restaurant-price'>
                  <Typography>
                      <CreditCardOutlinedIcon size="small"/>
                      {singleRestaurant.price}
                  </Typography>
            </div>

          </div>
      </Link> 
    </div>
  )
}

export default Restaurant