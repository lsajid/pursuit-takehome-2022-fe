import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';

function Reservation({reservation}) {
    const url = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();
    const singleReservationStyle = {
        margin: "10px",
        padding: "10px",
        border: "1px underline blue",
    }
    
    const handleDeleteReservation = () => {
        axios.delete(`${url}/api/reservations/${reservation.id}`)
        .then((res) => {
            navigate('/')
        }).catch((err) => console.log(err))
    } 

  return (
    <div>
    <Link to={`/restaurant/${reservation.restaurantId}`}>
        <Box sx={singleReservationStyle}>
            <Typography variant="h5" component="h2">
                {reservation.firstName} {reservation.lastName}
            </Typography>
            <div>
                <Typography variant="h6" component="h2">
                    <EmojiPeopleIcon/>
                    Party Size: {reservation.numGuests}
                </Typography>
                <Typography variant="h6">
                    <LocalPhoneIcon/>
                    Phone Number: {reservation.phoneNumber}
                </Typography>
                <Typography>
                    <DateRangeIcon/>
                    Date: {reservation.time}
                </Typography>
                <Typography>
                    <AccessTimeIcon/>
                    Time: {reservation.time}
                </Typography>
            </div>
        </Box>
    </Link>
    <Button onClick={handleDeleteReservation}>Delete</Button>
    </div>

  )
}

export default Reservation