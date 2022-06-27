import React, { useState, useEffect } from 'react'
import Restaurant from './Restaurant';
import "../Styles/Restaurants.css";
import FilterOptions from './FilterOptions';

function Restaurants() {
    const [ restaurants, setRestaurants ] = useState([]);
    const [ price, setPrice ] = useState(["$", "$$", "$$$", '$$$$']);
    const [ cuisine, setCuisine ] = useState([]);
    const [ location, setLocation ] = useState([]);
    const [ diningRestriction, setDiningRestriction ] = useState(["Takeout/Delivery"]);

    const url = process.env.REACT_APP_API_URL;

    const handleAddToCategory = (itemCategory, arrayContainer, state) => {
        if(itemCategory && !arrayContainer.includes(itemCategory)){
            return arrayContainer.push(itemCategory)
        }else{
            return state
        }
    }

    useEffect(() => {
        fetch(`${url}/api/restaurants`)
            .then((res) => {
                return res.json();
            }).then((data) => {
                setRestaurants(data.restaurants);

                let cuisineArray = [];
                let locationArray = [];

                for(let restaurant of data.restaurants){
                    handleAddToCategory(restaurant.cuisine, cuisineArray, cuisine);
                    handleAddToCategory(restaurant.location, locationArray, location);
                }
                if(!cuisineArray.length < 1){
                    setCuisine(cuisineArray);
                }
                if(!locationArray.length < 1){
                    setLocation(locationArray);
                }
            }).catch((err) => {
                console.log(err)
            })
    }, [url]);


    let showAllRestaurants = restaurants.map((restaurant) => {
        return <Restaurant key={restaurant.name + "type" + restaurant.cuisine} singleRestaurant={restaurant}/>
    });
    
  return (
    <div>
        <FilterOptions cuisine={cuisine} price={price} location={location} diningRestriction={diningRestriction}/>
        <div className='all-restaurants-container'>
            {showAllRestaurants}
        </div>

    </div>
  )
}

export default Restaurants;