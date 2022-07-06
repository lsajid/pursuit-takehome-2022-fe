import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Typography, Box, Modal, FormControl, TextField } from '@mui/material';

function UpdateReservationModal(props) {
//box from material UI
//props: open, handleClose, reservation, setReservation
    const [ updateReservation, setUpdateReservation ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        numGuests: 1,
        phoneNumber: "",
        time: ""
    });

    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const id = props.reservation.id
        axios.get(`${url}/api/reservations/${id}`)
            .then((res) => {
                setUpdateReservation(res.data)
            }).catch((err) => console.log(err))
    }, [])

    const handleTextChange = (event) => {
        setUpdateReservation({...updateReservation, [event.target.id] : event.target.value })
    }

    const handleGuests = (event) => {
        setUpdateReservation({...updateReservation, numGuests: event.target.value})
    }

    console.log(updateReservation)

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

    const isUpdateReservationValid = (reservation) => {
        
    }

    console.log(props, "Update reser" )
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

        {/* firstName: "",
        lastName: "",
        email: "",
        numGuests: 1,
        phoneNumber: "",
        time: "" */}
                <div className='update-form-container'>
                    <Box component="form" style={formStyle}>
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
                                required={true}
                                label="Email"
                                value={updateReservation.email}
                                onChange={handleTextChange}
                            />
                        </FormControl>
                        
                        <FormControl>
                            <TextField
                                type="Phone Number"
                                required={true}
                                value={updateReservation.phoneNumber}
                                label="Phone Number"
                                onChange={handleTextChange}
                            />
                        </FormControl>

                        <FormControl>

                        </FormControl>

                    </Box>
                </div>

            </Box>
        </Modal>
    </div>
  )
}

export default UpdateReservationModal