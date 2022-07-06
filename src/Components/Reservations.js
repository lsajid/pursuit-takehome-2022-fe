import React from 'react';
import "../Styles/Reservations.css";
import { useState, useEffect } from "react";
import Reservation from './Reservation';
import axios from 'axios';
import Box from "@mui/material/Box";
import "../Styles/Reservations.css";
import Typography from "@mui/material/Typography";

function Reservations() {
  const [ allReservations, setAllReservations ] = useState([]);
  const url = process.env.REACT_APP_API_URL;

  const reservationsContainerstyle = {
    // position: "absolute",
    // top: "30%",
    // left: "50%",
    marginTop: "200px",
    // transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "auto",
    bgcolor: "ghostwhite",
    border: "4px double pink",
    boxShadow: 1,
    p: 9,
  }

  console.log()
  
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