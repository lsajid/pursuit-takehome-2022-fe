import React from 'react';
import Restaurant from './Restaurant';
import "../Styles/Restaurants.css";

function Restaurants({restaurants, filterCategoryNames, input, filterButtonValue }) {

  //use Map to search through all of the restaurants and return only restaurants that match input
  
  const handleSearchRestaurants = (restaurantsArr, input) => {
    if(!input){
      return restaurantsArr;
    }
    return restaurantsArr.filter((restaurant) => restaurant.name.toLowerCase().includes(input.toLowerCase()))
  }

  const handleFilterRestaurants = (restaurantArr, filterVal) => {
    if(!filterVal){
      return restaurantArr
    }
    return restaurantArr.filter((restaurant) => {
      if(restaurant.price === filterVal && getCategory(filterVal) === 'Price'){
        return true
      }
      if(restaurant.location === filterVal && getCategory(filterVal) === 'Location'){
        return true
      }
      if(restaurant.cuisine === filterVal && getCategory(filterVal) === 'Cuisine'){
        console.log(restaurant.cuisine);
        return true
      }
      if(restaurant.diningRestriction){
        if(restaurant.diningRestriction === filterVal && getCategory(filterVal) === 'Dining Restrictions'){
          return true
        }
      }
      return false
    })
  }
 
  const renderAllRest = (restaurantArr, input, filterVal) => {
    let pass = handleSearchRestaurants(restaurantArr, input)
    let pass2 = handleFilterRestaurants(pass, filterVal)
    return pass2.map((restaurant) => {
      return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
    })
  }

  const getCategory = (valOfButton) => {
    let category;
    for(let object of filterCategoryNames){
      if(object.options.includes(valOfButton)){
        category = object.name;
      }
    }
    return category;
  }


  return (
    <div className='all-restaurants-container'>
      {renderAllRest(restaurants, input, filterButtonValue)}
    </div>
  )
}

export default Restaurants;