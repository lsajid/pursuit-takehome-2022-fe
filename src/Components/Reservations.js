//react
import React from 'react';
import { useState, useEffect } from "react";
//components
import Reservation from './Reservation';
//css
import "../Styles/Reservations.css";
// axios
import axios from 'axios';

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