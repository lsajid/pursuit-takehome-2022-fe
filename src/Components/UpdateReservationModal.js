import React, {useState} from 'react';
import axios from "axios";
import { Typography, Box, Modal, FormControl, TextField, MenuItem, FormLabel, Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

function UpdateReservationModal(props) {
//box from material UI
//props: open, handleClose, reservation, setReservation
    const [ updateReservation, setUpdateReservation ] = useState({
        firstName: props.reservation.firstName,
        lastName: props.reservation.lastName,
        email: props.reservation.email,
        numGuests: props.reservation.numGuests,
        phoneNumber: props.reservation.phoneNumber,
        time: props.reservation.time
    });


    
    // useEffect(() => {
    //      const url = process.env.REACT_APP_API_URL;
    //     const id = props.reservation.id
    //     axios.get(`${url}/api/reservations/${id}`)
    //         .then((res) => {
    //             setUpdateReservation(res.data)
    //         }).catch((err) => console.log(err))
    // }, [])

    const handleTextChange = (event) => {
        setUpdateReservation({...updateReservation, [event.target.id] : event.target.value })
    }

    const handleGuests = (event) => {
        setUpdateReservation({...updateReservation, numGuests: event.target.value})
    }

    const boxContainerStyling = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        height: 630,
        bgcolor: "ghostwhite",
        border: "2px solid #000",
        boxShadow: 24,
        p: 9,
    }

    const formStyle = {
        margin: "1px",
        padding: "2px",
        width: 500,
        height: 590,
        display: "grid",
        gridTemplateColumns: { sm: '1fr 1fr'},
        gap: 2,
    }
    const handleClose = () => {
        props.setOpen(false);
    }

    const handleButtonDisable = () => {
        const { firstName, lastName, phoneNumber, numGuests, time } = updateReservation;
        if(firstName && lastName && phoneNumber && numGuests && time){
            return false
        } else {
            return true
        }
    }

    const isReservationValid = (reservation) => {
        
    }

    const url = process.env.REACT_APP_API_URL;
    const id = props.reservation.id
    // console.log(`${url}/api/reservations/${id}`)
    const navigate = useNavigate();

    const updateReservationRequest = (updatedReservation) => {
        console.log(updatedReservation)
        axios.patch(`${url}/api/reservations/${id}`, updateReservation)
            .then((res) => {
                navigate('/')
            }).catch((err) => {
                console.log(err)
            });
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit Button clicked");
        updateReservationRequest(updateReservation)
    }

  return (
    <div className='update-reservation-modal-container'>
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="Form to Edit and / or update information"
        >
            <Box sx={boxContainerStyling} className="update-reservation-modal">
                <div className="modal-Title">
                    <Typography gutterBottom variant="h6" component="div" >
                        Update Reservation
                    </Typography>
                    <hr className='styledHr'/>
                </div>

                <div className='update-form-container'>
                    <Box component="form" onSubmit={handleSubmit} style={formStyle}>
                        <FormControl>
                            <TextField
                                id="firstName"
                                required={true}
                                label="First Name"
                                value={updateReservation.firstName}
                                onChange={handleTextChange}
                            />      
                        </FormControl>

                        <FormControl>
                            <TextField
                                id="lastName"
                                required={true}
                                label="Last Name"
                                value={updateReservation.lastName}
                                onChange={handleTextChange}
                            />
                        </FormControl>

                        <FormControl>
                            <TextField
                                type="email"
                                label="Email"
                                value={updateReservation.email}
                                onChange={handleTextChange}
                            />
                        </FormControl>
                        
                        <FormControl>
                            <TextField
                                required={true}
                                value={updateReservation.phoneNumber}
                                label="Phone Number"
                                onChange={handleTextChange}
                            />
                        </FormControl>

                        <FormControl>
                            <TextField
                                required={true}
                                label="Number of Guests"
                                onChange={handleGuests}
                                select
                                id="numGuests" 
                                value={updateReservation.numGuests}
                            >
                                <MenuItem id="numGuests" value={0}></MenuItem>
                                {renderCustomSeats(15)}
                            </TextField>
                        </FormControl>

                        <FormControl>
                            <FormLabel id="resTime">Reservation Time</FormLabel>
                            <TextField
                                required
                                id="time"
                                onChange={handleTextChange}
                                type="datetime-local"
                            />
                        </FormControl>
                        <Button disabled={handleButtonDisable()} type="submit" variant="outlined">Submit</Button>
                    </Box>
                </div>
            </Box>
        </Modal>
    </div>
  )
}

export default UpdateReservationModal