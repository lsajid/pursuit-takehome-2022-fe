import React from 'react';
import Reservations from '../Components/Reservations';
import "../Styles/IndexReservations.css";
import { Typography } from '@mui/material';


function IndexReservations() {
  return (
    <div className='reservations-page-container'>
        <Typography id="box title" variant="h4" component="div">
          All Reservations
        </Typography>
        <hr/>
      
      <Reservations/>
    </div>
  )
}

export default IndexReservations