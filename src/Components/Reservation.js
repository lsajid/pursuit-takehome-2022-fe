import React from 'react';
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Reservation({reservation}) {
  return (
    <Link to={`/restaurant/${reservation.restaurantId}`}>
        <Box>
            <Typography>
                Reservation
            </Typography>
        </Box>
    </Link>
  )
}

export default Reservation