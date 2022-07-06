import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../Styles/Reservation.css"
import {Button, Grid, Paper, Typography} from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';
import UpdateReservationModal from './UpdateReservationModal';

function Reservation({reservation}) {
    const [ restaurantName, setRestaurantName ] = useState("");
    const [open, setOpen] = useState(false);

    const url = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();
    
    const handleDeleteReservation = () => {
        axios.delete(`${url}/api/reservations/${reservation.id}`)
        .then((res) => {
            navigate('/')
        }).catch((err) => console.log(err))
    } 

    const paperStyle = {
        p: 2,
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: "rgb(246, 242, 237)"
    }

    const buttonStyle = {
        margin:3,
        position: "relative",
        paddingLeft: 10,
        paddingRight: 10,
        width: "34px",
        color: "ghostwhite",
        background:
          "linear-gradient(to right, #aea0d5, #eaafc8)",
        "&:after": {
          content: '" "',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boxShadow: "0 0 10px 0 #f5005780",
          animation: "mui-ripple-pulsate 1s infinite",
          zIndex: -1
      }
    }

    const handleOpen = () => {
        setOpen(true);
    }
    
    useEffect(() => {
    axios.get(`${url}/api/restaurants/${reservation.restaurantId}`)
        .then((res) => {
            setRestaurantName(res.data.name)
        }).catch((err) => {
            console.log(err)
        })
    },[url, reservation.restaurantId])


  return (
    <div className="single-reservation-container">
        <Link to={`/restaurant/${reservation.restaurantId}`}>
            <Paper
                sx={paperStyle}
            >
                <Grid container spacing={2}>
                    <Grid item sx={{width:128, height:128}}>
                        <Typography gutterBottom color="text.secondary" variant="h6" component="div">
                        {restaurantName}
                        </Typography>                    
                    </Grid>

                    <Grid item xs={13} sm container>
                        <Grid item xs container direction="column" spacing={7}>
                            <Grid item xs>
                            <Typography variant="h6">
                                {reservation.firstName} {reservation.lastName}
                            </Typography>
                            <hr/>
                            <Typography gutterBottom color="text.secondary" variant="subtitle1" component="div">
                                    <EmojiPeopleIcon/>
                                    Party Size: {reservation.numGuests}
                                </Typography>
                                <Typography gutterBottom color="text.secondary" variant="subtitle1" component="div">
                                    <LocalPhoneIcon/>
                                    Phone Number: {reservation.phoneNumber}
                                </Typography>
                                <Typography gutterBottom color="text.secondary" variant="subtitle1" component="div">
                                    <DateRangeIcon/>
                                    Date: {reservation.time}
                                </Typography>
                                <Typography gutterBottom color="text.secondary" variant="subtitle1" component="div">
                                    <AccessTimeIcon/>
                                    Time: {reservation.time}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Link>
        <Button sx={buttonStyle} onClick={handleDeleteReservation}>Delete</Button>
        <Button onClick={handleOpen} sx={buttonStyle}>EDIT</Button>
        <UpdateReservationModal buttonStyle={buttonStyle} setOpen={setOpen} handleOpen={handleOpen} open={open} reservation={reservation}/>
    </div>
  )
}

export default Reservation