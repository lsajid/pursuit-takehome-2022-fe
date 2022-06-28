import React, { useState, useEffect } from 'react'
import Restaurants from '../Components/Restaurants';
import FilterBar from '../Components/FilterBar';
import "../Styles/SearchRestaurants.css";


function SearchRestaurants({ input, setInput }) {
  const [ restaurants, setRestaurants ] = useState([]);
  const [ filterButtonValue, setFilterButtonValue ] = useState('');
  const [ filterCategoryNames, setFilterCategoryNames ] = useState([
    {
      name: "Price", 
      options: ["$", "$$", "$$$", "$$$$"]
    },
    {
      name: "Location", 
      options: ["New York City", "Queens", 'Brooklyn']
    },
    {
      name: "Cuisine", 
      options: ['Pizza', 'American', 'Korean', 'French', 'Greek', 'Japanese', 'Mexican', 'Thai']
    },
    {
      name: "Dining Restrictions",
      options: ["Takeout","Delivery"]
    }
  ]);
  
  const url = process.env.REACT_APP_API_URL;
  //create handleFilterButtonChange

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
        <p></p>
      </div>
      <div className='filter-box'>
        <FilterBar filterButtonValue={filterButtonValue} setFilterButtonValue={setFilterButtonValue} filterCategoryNames={filterCategoryNames}/>
      </div>

      <div className='restaurants-box'>
        <Restaurants filterButtonValue={filterButtonValue} setFilterButtonValue={setFilterButtonValue} filterCatergoryNames={filterCategoryNames} input={input} setInput={setInput} filterCategoryNames={filterCategoryNames} restaurants={restaurants}/>
      </div>
    </div>
  )
}

export default SearchRestaurants