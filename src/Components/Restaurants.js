//react library
import React from "react";
//component
import Restaurant from "./Restaurant";
//css
import "../Styles/Restaurants.css";

function Restaurants({ restaurants, filterCategoryNames, input, filterButtonValue}) {
  //use Map to search through all of the restaurants and return only restaurants that match input
  
  ///add property isPopular to the restaurant obj that has the most popular reservations
  const addIsPopular = (restArr) => {
    let sortedRests = restArr.sort((a,b) => a.reservations.length - b.reservations.length);
    let firstThreePopularRest = sortedRests.slice(0,3).map((restaurant) => {
      return restaurant.isPopular = true;
    })
    return firstThreePopularRest;
  }

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

  const filterHelperFunc = (restaurant, filterValArr) => {
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

  const renderAllRest = (restaurantArr, input, filterVal) => {
    let addedIsPopular = addIsPopular(restaurantArr)  //gets an array of restaurant obj w three popular rests
    let pass = handleSearchRestaurants(addedIsPopular, input);
    let pass2 = handleFilterRestaurants(pass, filterVal);
    return pass2.map((restaurant) => {
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
      {renderAllRest(restaurants, input, filterButtonValue)}
    </div>
  );
}

export default Restaurants;
