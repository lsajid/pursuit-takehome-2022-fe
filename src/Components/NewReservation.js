import React from 'react';
import { FormControl, Box, MenuItem, Button, TextField, Typography, FormLabel, Grid } from '@mui/material';
import "../Styles/NewReservation.css";
import { useNavigate } from 'react-router-dom';

function NewReservation({ newReservation, handleTextChange, handleSubmitForm, handleGuests }) {
    const navigate = useNavigate();

    const style = {
        // transform: "translate(13%, 0%)",
        marginLeft: "20px",
        width: 500,
        height: 450,
        bgcolor: "ghostwhite",
        border: "2px double #000",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 #f5005780",
        p: 9,
        backgroundColor: "ghostwhite",
    }
    const style2 = {
        margin: "1px",
        padding: "2px",
        display: "grid",
        gridTemplateColumns: { sm: '1fr 1fr '},
        gap: 2,
        backgroundColor: "ghostwhite"
    }

    const buttonStyle = {
        marginTop: "30px",
        maxWidth: "450px",
        height: "60px"
    }

    const numOfGuestTextFieldStyle = {
        margin: " 0px 18px 0px 0px"
    }
    
    const makeNumberGuestList = (guests) => {
        const seatsArr  = Array.from(Array(guests+1).keys());
        return seatsArr
    }

    const renderCustomSeats = (numOfGuests) => {
        let newSeats = makeNumberGuestList(numOfGuests)
        return newSeats.map((number) => {
            return <MenuItem key={number} id="numGuests" value={number}> {number} Guests</MenuItem>
        });
    }

  return (
    <div>
        <Box sx={style}>
        <Typography variant="h5">
            Make a reservation
        </Typography>
        <hr className='styledHr'/>
        <Box style={style2} component="form" className="reservation-form" onSubmit={handleSubmitForm}>
            <Grid container spacing={3}>
                <Grid item xs={13} container>
                   <Grid item xs>
                    <FormControl>
                        <FormLabel id="firstName">First Name</FormLabel>
                            <TextField
                                id="firstName"
                                type= 'text'
                                value={newReservation.firstName}
                                onChange={handleTextChange}
                                required={true}
                            />
                    </FormControl>
                   </Grid>
                   <Grid item xs>
                    <FormControl>
                        <FormLabel id="lastName">Last Name</FormLabel>
                            <TextField
                                id="lastName"
                                type= 'text'
                                value={newReservation.lastName}
                                onChange={handleTextChange}
                                required={true}
                            />
                    </FormControl>
                   </Grid>
                </Grid>
                <Grid item xs={13} container>
                    <Grid item xs>
                        <FormControl>
                            <FormLabel id="phoneNumber">Phone Number</FormLabel>
                            <TextField
                                id="phoneNumber"
                                required={true}
                                type= 'text'
                                value={newReservation.phoneNumber}
                                onChange={handleTextChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs>
                        <FormControl>
                            <FormLabel id="email">Email</FormLabel>
                                <TextField
                                    required={true}
                                    id="email"
                                    type= 'text'
                                    value={newReservation.email}
                                    onChange={handleTextChange}
                                />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={13} container>
                    <Grid item xs>
                        <FormControl>
                            <FormLabel id="resTime">Reservation Time</FormLabel>
                                <TextField
                                    required={true}
                                    id="time"
                                    value={newReservation.time}
                                    onChange={handleTextChange}
                                    type="datetime-local"
                                />
                        </FormControl>
                    </Grid>
                    <Grid sx={numOfGuestTextFieldStyle} item xs={4} >
                        <FormControl>
                            <FormLabel id="numGuests">Number of Guests</FormLabel>
                                <TextField
                                    required={true}
                                    id="numGuests"
                                    select
                                    value={newReservation.numGuests}
                                    onChange={handleGuests}
                                >
                                    <MenuItem id="numGuests" value={0}></MenuItem>
                                    {renderCustomSeats(10)}
                                </TextField>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Button sx={buttonStyle} type="submit" variant="outlined">Submit</Button>
        </Box>
        </Box>

    </div>
  )
}

export default NewReservation