import React, { useEffect, useState } from 'react';
import RestaurantDetails from '../Components/RestaurantDetails';
import "../Styles/SingleRestaurant.css";
import {useParams} from "react-router-dom"

function SingleRestaurant({reservations}) {
  const [restaurantReservations, setRestaurantReservations ] = useState([])
  const {id} = useParams();
  const url = process.env.REACT_APP_API_URL;
  // console.log("restaurant id", id)
  // console.log("url", `${url}/api/restaurants/${id}/reservations`)
  // console.log("postman shoudl", "https://laiba-takehome-api.herokuapp.com/api/restaurants/e35742f6-017a-4216-bd56-60b79a6b076b/reservations")
  useEffect(() => {
    fetch(`${url}/api/restaurants/${id}/reservations`)
      .then((res) => {
        return res.json();
      }).then((data) => {
        console.log(data)
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