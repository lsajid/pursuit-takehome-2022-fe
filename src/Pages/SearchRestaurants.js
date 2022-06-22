import React from 'react';
import Restaurants from '../Components/Restaurants';
import FilterBar from '../Components/FilterBar';

function SearchRestaurants() {
  return (
    <div>
      <FilterBar/>
      <Restaurants/>
    </div>
  )
}

export default SearchRestaurants