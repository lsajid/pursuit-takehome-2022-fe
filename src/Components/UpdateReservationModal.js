import React, {useState} from 'react';
import axios from "axios";
import { Typography, Box, Modal } from '@mui/material';

function UpdateReservationModal(props) {
//box from material UI
//props: open, handleClose, reservation, setReservation

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

  return (
    <div className='update-reservation-modal-container'>
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="Form to Edit and / or update information"
        >
            <Box sx={boxContainerStyling}className="update-reservation-modal">
                <div>
                    <Typography gutterBottom variant="h6" component="div" >
                        hello world
                    </Typography>
                </div>
            </Box>
        </Modal>

    </div>
  )
}

export default UpdateReservationModal