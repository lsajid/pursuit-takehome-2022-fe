import React from 'react';
import Restaurants from '../Components/Restaurants';
import FilterBar from '../Components/FilterBar';
import "../Styles/SearchRestaurants.css";


function SearchRestaurants() {
  return (
    <div className='page-container'>
      <div className='promotions-box'>
        <p>Carousel goes here !!</p>
      </div>
      <div className='filter-box'>
        <FilterBar/>
      </div>

      <div className='restaurants-box'>
        <Restaurants/>
      </div>
    </div>
  )
}

export default SearchRestaurants