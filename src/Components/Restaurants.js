//react library
import React from "react";
//component
import Restaurant from "./Restaurant";
//css
import "../Styles/Restaurants.css";
//use satte
import { useState } from "react";

function Restaurants({ restaurants, filterCategoryNames, input, filterButtonValue}) {
  const [ sortBy, setSortBy ] = useState("");

  const handleSortValue = (event) => {
    setSortBy(event.target.value);
  }

  //use Map to search through all of the restaurants and return only restaurants that match input
  const handleSearchRestaurants = (restaurantsArr, input) => {
    if (!input) {
      return restaurantsArr;
    }
    return restaurantsArr.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  const handleFilterRestaurants = (restaurantArr, filterValArr) => {
    if (filterValArr.length < 1) {
      return restaurantArr;
    }
    return restaurantArr.filter((restaurant) => {
      return filterHelperFunc(restaurant, filterValArr);
    });
  };

  const filterHelperFunc = (restaurant, filterValArr) => { // [ "$", "Queens"]
    return filterValArr.every((filter) =>
      checkForFilterVal(restaurant, filter)
    );
    //return true if restaurant.location === "Queens" && restaurant.price === '$'
  };
  const checkForFilterVal = (restaurant, filter) => {
    if (restaurant.price === filter && getCategory(filter) === "Price") {
      return true;
    }
    if (restaurant.location === filter && getCategory(filter) === "Location") {
      return true;
    }
    if (restaurant.cuisine === filter && getCategory(filter) === "Cuisine") {
      return true;
    }
    if (restaurant.diningRestriction) {
      if (
        restaurant.diningRestriction === filter &&
        getCategory(filter) === "Dining Restrictions"
      ) {
        return true;
      }
    }
    return false;
  };

  const sortRestaurants = (restaurantArr, sortInput) => {
    if(!sortInput){
      return restaurantArr;
    }
    return restaurantArr.sort((a,b) => {
      let sortReturnVal = 0;
      if(a.name.toLowerCase() < b.name.toLowerCase()){
        sortReturnVal = -1;
      }else if (a.name.toLowerCase() > b.name.toLowerCase()){
        sortReturnVal = 1;
      }
      return sortReturnVal;
    })
  }

  const renderAllRest = (restaurantArr, input, filterVal, sortInput) => {
    let sortedRestaurants = sortRestaurants(restaurantArr, sortInput);
    let searchedForRest = handleSearchRestaurants(sortedRestaurants, input);
    let filteredRest = handleFilterRestaurants(searchedForRest, filterVal);
    return filteredRest.map((restaurant) => {
      return (
        <Restaurant
          key={restaurant.name + "type" + restaurant.cuisine}
          singleRestaurant={restaurant}
        />
      );
    });
  };

  const getCategory = (valOfButton) => {
    let category;
    for (let object of filterCategoryNames) {
      if (object.options.includes(valOfButton)) {
        category = object.name;
      }
    }
    return category;
  };

  return (
    <div className="all-restaurants-container">
      <select onChange={handleSortValue} id="sort">
        <option value="">""</option>
        <option value="name">Sort By Name</option>
      </select>
      {renderAllRest(restaurants, input, filterButtonValue, sortBy)}
    </div>
  );
}

export default Restaurants;
