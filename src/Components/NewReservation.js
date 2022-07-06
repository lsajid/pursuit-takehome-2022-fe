import React from 'react';
import { FormControl, Box, InputLabel, Button, OutlinedInput, Typography, FormLabel } from '@mui/material';
import "../Styles/NewReservation.css"


function NewReservation({ newReservation, handleTextChange, handleSubmitForm }) {
    const style = {
        // transform: "translate(13%, 0%)",
        marginLeft: "70px",
        width: 400,
        height: 550,
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
        gridTemplateColumns: { sm: '1fr 1fr'},
        gap: 4,
    }


  return (
    <div>
        <Box sx={style}>
        <Typography variant="h5">
            Make a reservation
        </Typography>
        <hr/>
        <Box style={style2} component="form" className="reservation-form" onSubmit={handleSubmitForm}>
            <FormControl>
                <FormLabel id="firstName">First Name</FormLabel>
                    <OutlinedInput
                        id="firstName"
                        type= 'text'
                        value={newReservation.firstName}
                        onChange={handleTextChange}
                    />
            </FormControl>
            <FormControl>
                <FormLabel id="lastName">Last Name</FormLabel>
                    <OutlinedInput
                        id="lastName"
                        type= 'text'
                        value={newReservation.lastName}
                        onChange={handleTextChange}
                    />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                    <OutlinedInput
                        id="phoneNumber"
                        type= 'text'
                        value={newReservation.phoneNumber}
                        onChange={handleTextChange}
                    />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput
                        id="email"
                        type= 'text'
                        value={newReservation.email}
                        onChange={handleTextChange}
                        label="email"
                    />
            </FormControl>
            <FormControl>
                    <FormLabel id="resTime">Reservation Time</FormLabel>
                    <OutlinedInput
                        id="time"
                        value={newReservation.time}
                        onChange={handleTextChange}
                        type="datetime-local"
                    />
            </FormControl>
            <FormControl>
                    <OutlinedInput
                        id="numGuests"
                        type= 'text'
                        value={newReservation.numGuests}
                        onChange={handleTextChange}
                        label="numGuests"
                    />
            </FormControl>
            <Button type="submit" variant="outlined">Submit</Button>
        </Box>
        </Box>

    </div>
  )
}

export default NewReservation