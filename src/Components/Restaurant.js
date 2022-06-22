import React from 'react';
// import {Link} from "react-router-dom";
import restaurantStockImg from "../assets/restaurant.png"

function Restaurant( {singleRestaurant} ) {

  return (
    <div className='restaurant-container'>

        <div className='restaurant-data'>
          <div className='image-container'>
            <img className="restaurant-image"  src={restaurantStockImg} alt='restaurant stock'/>
          </div>
            <div className='restaurant-name'>
              <div>
                  <h3>{singleRestaurant.name}</h3>
              </div>
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
    </div>
  )
}

export default Restaurant