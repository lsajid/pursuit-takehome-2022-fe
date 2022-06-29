import React from 'react';
import { useState } from 'react';

import Box from "@mui/material/Box";
import {Button} from '@mui/material';

function ReservationModal() {


    
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        height: 650,
        bgcolor: "ghostwhite",
        border: "2px solid #000",
        boxShadow: 24,
        p: 9,
    };
  return (
    <div>
{/*         
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-restaurant-reservations"
            aria-describedby="view reservations from this restaurant"
        >ReservationModal
            <Box sx={style}>
                <Typography>
                    Hey this is a modal
                </Typography>
            </Box>
        </Modal> */}
    </div>

  )
}

export default ReservationModal;