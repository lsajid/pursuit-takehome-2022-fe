import React from 'react';
import Restaurant from './Restaurant';
import "../Styles/Restaurants.css";

function Restaurants({restaurants, filterCategoryNames, input, filterButtonValue }) {

  let searchRestaurants = restaurants.map((restaurant) => {
    if(restaurant.name.toLowerCase().split(" ").includes(input.toLowerCase())){
      return <Restaurant  key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
    }
  });

  let showAllRestaurants = restaurants.map((restaurant) => {
      return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
  });

  const getCategory = (valOfButton) => {
    let category;
    for(let object of filterCategoryNames){
      if(object.options.includes(valOfButton)){
        category = object.name;
      }
    }
    return category;
  }

  let filterByCategory = restaurants.map((restaurant) => {

    if(restaurant.price === filterButtonValue && getCategory(filterButtonValue) === 'Price'){
      return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
    }
    if(restaurant.location === filterButtonValue && getCategory(filterButtonValue) === 'Location'){
      return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
    }
    if(restaurant.cuisine === filterButtonValue && getCategory(filterButtonValue) === 'Cuisine'){
      console.log(restaurant.cuisine);
      return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
    }
    if(restaurant.diningRestriction){
      if(restaurant.diningRestriction === filterButtonValue && getCategory(filterButtonValue) === 'Dining Restrictions'){
        console.log(restaurant.diningRestriction);
        return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
      }
    }
  });

  return (
    <div>
      {!input ? ( <div>
        {!filterButtonValue? (
            <div className='all-restaurants-container'>
              {showAllRestaurants}
            </div>
        ) : (
            <div className='all-restaurants-container'>
              {filterByCategory}
            </div>
        )}
        </div>
      ) : (
          <div className='all-restaurants-container'>
            {searchRestaurants}
          </div>
      )}
    </div>
  )
}

export default Restaurants;