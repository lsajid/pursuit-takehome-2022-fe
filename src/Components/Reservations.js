import React from 'react';
import "../Styles/Reservations.css";
import { useState, useEffect } from "react";
import Reservation from './Reservation';
import axios from 'axios';
import "../Styles/Reservations.css";

function Reservations() {
  const [ allReservations, setAllReservations ] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  
  useEffect(() => {
    axios.get(`${url}/api/reservations`)
      .then((res) => {
        setAllReservations(res.data.reservations);
      })
      .catch((err) => console.log(err))
  }, [url]);

   const displayAllReservations = allReservations.map((reservation, index) => {
    return <Reservation key={index+ reservation.id} reservation={reservation}/>
  })

  return (
    <div className='all-reservations-container'>
        {displayAllReservations}
    </div>
  )
}

export default Reservations