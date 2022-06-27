import React from 'react'
import Restaurant from './Restaurant';
import "../Styles/Restaurants.css";

function Restaurants({restaurants, filterCategoryNames, input, setInput, filterButtonValue }) {

  let filteredRestaurants = restaurants.map((restaurant) => {
    if(restaurant.name.toLowerCase().split(" ").includes(input.toLowerCase())){
      return <Restaurant  key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
    }
  });

  console.log(filteredRestaurants)

    let showAllRestaurants = restaurants.map((restaurant) => {
        return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
    });

    let filterByLocation = restaurants.map((restaurant) => {
      console.log(filterButtonValue);
      console.log(restaurant.location.includes(filterButtonValue), "if found", restaurant);

      if(restaurant.location.includes(filterButtonValue)){
        return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant} />
      }
    })

  console.log("filter", filterByLocation)

  return (
    <div>
      {!input ? (
        <div className='all-restaurants-container'>
          {showAllRestaurants}
        </div>
      )
        :( <div>
          {!filterButtonValue ? (
          <div className='all-restaurants-container'>
           {filteredRestaurants}
          </div>
        ) : (
          <div className='all-restaurants-container'>
           {filterByLocation}
          </div>
        )} 
      </div>
      )} 
    </div>
  )
}

export default Restaurants;