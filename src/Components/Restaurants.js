import React from 'react'
import Restaurant from './Restaurant';
import "../Styles/Restaurants.css";

function Restaurants({restaurants}) {

    let showAllRestaurants = restaurants.map((restaurant) => {
        return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
    });
    
  return (
    <div>
        <div className='all-restaurants-container'>
            {showAllRestaurants}
        </div>

    </div>
  )
}

export default Restaurants;