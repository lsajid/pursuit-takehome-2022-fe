import React, { useState, useEffect } from 'react'
import Restaurants from '../Components/Restaurants';
import FilterBar from '../Components/FilterBar';
import "../Styles/SearchRestaurants.css";


function SearchRestaurants() {
  const [ restaurants, setRestaurants ] = useState([]);

  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${url}/api/restaurants`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            setRestaurants(data.restaurants);
        }).catch((err) => {
            console.log(err)
        })
}, [url]);

  return (
    <div className='page-container'>
      <div className='promotions-box'>
        <p>Carousel goes here !!</p>
      </div>
      <div className='filter-box'>
        <FilterBar/>
      </div>

      <div className='restaurants-box'>
        <Restaurants restaurants={restaurants}/>
      </div>
    </div>
  )
}

export default SearchRestaurants