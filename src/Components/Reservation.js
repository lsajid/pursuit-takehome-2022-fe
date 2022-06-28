import React from 'react';
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Reservation({reservation}) {
    const style = {
        position: "absolute",
        top: "30%",
        left: "50%",
        marginTop: "130px",
        transform: "translate(-50%, -50%)",
        width: "80vw",
        height: "40vh",
        bgcolor: "ghostwhite",
        border: "2px solid #000",
        boxShadow: 1,
        p: 9,
      };
  return (
    <Box sx={style}>
        <Link to={`/restaurant/${reservation.id}`}>
            <Typography>
                Reservation
            </Typography>
        </Link>
    </Box>
  )
}

export default Reservation