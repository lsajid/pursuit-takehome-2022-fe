import React, { useEffect, useState } from 'react';
import RestaurantDetails from '../Components/RestaurantDetails';
import "../Styles/SingleRestaurant.css";
import {useParams} from "react-router-dom"

function SingleRestaurant({reservations}) {
  const [restaurantReservations, setRestaurantReservations ] = useState([])
  const {id} = useParams();
  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${url}/api/restaurants/${id}/reservations`)
      .then((res) => {
        return res.json();
      }).then((data) => {
        setRestaurantReservations(data)
      })
  }, [url,id]);

  return (
    <div className='singleRestaurant-container'> 
      <RestaurantDetails restaurantReservations={restaurantReservations} reservations={reservations}/> 
    </div>
  )
}

export default SingleRestaurant