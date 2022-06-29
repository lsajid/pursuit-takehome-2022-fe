import React from 'react';
import { FormControl, Box, InputLabel, Button, OutlinedInput, Typography } from '@mui/material';


function NewReservation({ newReservation, handleTextChange, handleSubmitNewReservation }) {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-20%, 0%)",
        width: 400,
        height: 550,
        bgcolor: "ghostwhite",
        border: "2px solid #000",
        boxShadow: 24,
        p: 9,
    }

  return (
    <Box type="form" onSubmit={handleSubmitNewReservation} sx={style}>
        <Typography variant="h5">
            Make a reservation
        </Typography>
        <FormControl>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
                <OutlinedInput
                    id="firstName"
                    type= 'text'
                    value={newReservation.firstName}
                    onChange={handleTextChange}
                    label="firstName"
                />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <OutlinedInput
                    id="lastName"
                    type= 'text'
                    value={newReservation.lastName}
                    onChange={handleTextChange}
                    label="lastName"
                />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                <OutlinedInput
                    id="phoneNumber"
                    type= 'text'
                    value={newReservation.phoneNumber}
                    onChange={handleTextChange}
                    label="phoneNumber"
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
            <InputLabel htmlFor="time">Time</InputLabel>
                <OutlinedInput
                    id="time"
                    type= 'text'
                    value={newReservation.time}
                    onChange={handleTextChange}
                    label="time"
                />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="numGuests">Number of Guests</InputLabel>
                <OutlinedInput
                    id="time"
                    type= 'text'
                    value={newReservation.time}
                    onChange={handleTextChange}
                    label="time"
                />
        </FormControl>
        <Button type="submit"> Submit </Button>
    </Box>
  )
}

export default NewReservation