import React, { useState, useEffect } from 'react'
import Restaurant from './Restaurant';
import "../Styles/Restaurants.css"


function Restaurants() {
    const [ restaurants, setRestaurants ] = useState([])
    const url = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        fetch(`${url}/api/restaurants`)
            .then((res) => {
                return res.json();
            }).then((data) => {
                setRestaurants(data.restaurants)
            }).catch((err) => {
                console.log(err)
            })
    }, [url]);

    let showAllRestaurants = restaurants.map((restaurant) => {
        return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
    });
    
  return (
    <div className='all-restaurants-container'>
        {showAllRestaurants}
    </div>
  )
}

export default Restaurants